import { config } from 'dotenv';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { searchTool } from '@parallel-web/ai-sdk-tools';
import { streamText, type Tool } from 'ai';

const rootDir = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(rootDir, '.env.local') });

const prompt =
  process.argv.slice(2).join(' ') ||
  'What are the latest developments in AI agents in 2026?';

if (!process.env.PARALLEL_API_KEY) {
  console.error('Missing PARALLEL_API_KEY in .env.local');
  process.exit(1);
}

const result = streamText({
  model: 'openai/gpt-5.4',
  messages: [{ role: 'user', content: prompt }],
  tools: {
    'web-search': searchTool as Tool,
  },
  toolChoice: 'auto',
});

for await (const part of result.fullStream) {
  if (part.type === 'text-delta') process.stdout.write(part.text);
  if (part.type === 'tool-call') console.log(`\n[tool-call] ${part.toolName}`);
  if (part.type === 'tool-result') console.log(`[tool-result] ${part.toolName}`);
}

console.log('\n\nUsage:', await result.usage);
console.log('Finish:', await result.finishReason);
