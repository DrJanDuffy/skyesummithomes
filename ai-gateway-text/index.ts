import { config } from 'dotenv';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { streamText } from 'ai';

const rootDir = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(rootDir, '.env.local') });

const prompt =
  process.argv.slice(2).join(' ') ||
  'In three short paragraphs, explain why Skye Summit in Las Vegas is attractive to home buyers.';

if (!process.env.AI_GATEWAY_API_KEY && !process.env.VERCEL_OIDC_TOKEN) {
  console.error(
    'Missing AI_GATEWAY_API_KEY (or VERCEL_OIDC_TOKEN). Add AI_GATEWAY_API_KEY to .env.local or run: vercel env pull .env.local',
  );
  process.exit(1);
}

console.log('Streaming from openai/gpt-5.4 via AI Gateway…\n');

const result = streamText({
  model: 'openai/gpt-5.4',
  prompt,
});

for await (const textPart of result.textStream) {
  process.stdout.write(textPart);
}

console.log('\n');
console.log('Token usage:', await result.usage);
console.log('Finish reason:', await result.finishReason);
