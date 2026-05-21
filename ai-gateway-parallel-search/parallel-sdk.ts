import { config } from 'dotenv';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createSearchTool, extractTool } from '@parallel-web/ai-sdk-tools';
import { generateText, stepCountIs, streamText, type Tool } from 'ai';

const rootDir = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(rootDir, '.env.local') });

const mode = process.argv[2] === 'extract' ? 'extract' : 'search';
const prompt = process.argv.slice(mode === 'extract' ? 3 : 2).join(' ') || defaultPrompt(mode);

function defaultPrompt(kind: 'search' | 'extract'): string {
  if (kind === 'extract') {
    return 'Summarize how the Vercel AI SDK recommends using tools, based on https://vercel.com/docs/ai-sdk';
  }
  return 'What are the latest Las Vegas housing market trends in 2026? Search the web and cite sources.';
}

if (!process.env.PARALLEL_API_KEY) {
  console.error(
    'Missing PARALLEL_API_KEY. Install the Parallel integration from https://vercel.com/marketplace/parallel and add the key to .env.local',
  );
  process.exit(1);
}

if (!process.env.AI_GATEWAY_API_KEY && !process.env.VERCEL_OIDC_TOKEN) {
  console.error(
    'Missing AI_GATEWAY_API_KEY (or VERCEL_OIDC_TOKEN) for the language model via AI Gateway.',
  );
  process.exit(1);
}

const model = 'openai/gpt-5.4';
const webSearch = createSearchTool({
  mode: 'one-shot',
  max_results: 10,
}) as Tool;

console.log(
  `parallel-sdk (${mode}) — model: ${model} via AI Gateway, Parallel API for tools\n`,
);

const result =
  mode === 'extract'
    ? await generateText({
        model,
        messages: [{ role: 'user', content: prompt }],
        tools: { 'web-extract': extractTool as Tool },
        toolChoice: 'auto',
        stopWhen: stepCountIs(8),
      })
    : await generateText({
        model,
        messages: [{ role: 'user', content: prompt }],
        tools: { 'web-search': webSearch },
        toolChoice: 'auto',
        stopWhen: stepCountIs(8),
      });

for (const call of result.toolCalls) {
  console.log(`[tool] ${call.toolName}`);
}

if (!result.text.trim()) {
  console.error('No final text. Finish reason:', result.finishReason);
  process.exit(1);
}

console.log(result.text);
console.log('\nToken usage:', result.usage);
console.log('Steps:', result.steps.length);
console.log('Finish reason:', result.finishReason);
