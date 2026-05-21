# Parallel Search with Vercel

Two ways to use [Parallel](https://docs.parallel.ai/integrations/vercel) with the [Vercel AI SDK](https://vercel.com/docs/ai-sdk):

| Path | Keys | Package | Best for |
|------|------|---------|----------|
| **AI Gateway tool** | `AI_GATEWAY_API_KEY` only | `gateway.tools.parallelSearch()` from `ai` | One key, billing via AI Gateway |
| **Parallel SDK tools** | `AI_GATEWAY_API_KEY` + `PARALLEL_API_KEY` | `@parallel-web/ai-sdk-tools` | Client-side tool execution, Search + Extract APIs |

Install Parallel from the [Vercel Marketplace](https://vercel.com/marketplace/parallel) to get `PARALLEL_API_KEY`.

## Setup

```bash
cd ai-gateway-parallel-search
npm install
```

`.env.local`:

```env
AI_GATEWAY_API_KEY=...   # Language model via AI Gateway
PARALLEL_API_KEY=...     # Only for @parallel-web/ai-sdk-tools scripts
```

> `@parallel-web/ai-sdk-tools` lists a peer on AI SDK v5; it runs with AI SDK v6 here (see `.npmrc`).

---

## Path 1: AI Gateway `parallel_search` (single key)

Gateway runs Parallel Search as a **provider-executed** tool.

```bash
npm run search
npm run search:stream
```

See `index.ts` — includes a synthesis step when the model stops with `tool-calls` only.

---

## Path 2: `@parallel-web/ai-sdk-tools` (Gateway + Parallel keys)

Uses [Parallel’s NPM tools](https://www.npmjs.com/package/@parallel-web/ai-sdk-tools) with **your Parallel API key**. The LLM still routes through AI Gateway (`openai/gpt-5.4`).

**Search** (ranked URLs + excerpts):

```bash
npm run search:sdk
npm run search:sdk -- "Latest Skye Summit Las Vegas real estate news"
npm run search:sdk:stream
```

**Extract** (content from URLs):

```bash
npm run extract:sdk
npm run extract:sdk -- "Summarize https://vercel.com/docs/ai-sdk tool calling"
```

Example (`parallel-sdk.ts`):

```typescript
import { createSearchTool } from '@parallel-web/ai-sdk-tools';
import { generateText, type Tool } from 'ai';

const result = await generateText({
  model: 'openai/gpt-5.4',
  messages: [{ role: 'user', content: prompt }],
  tools: { 'web-search': createSearchTool({ mode: 'one-shot' }) as Tool },
  toolChoice: 'auto',
});
```

## Links

- [Parallel × Vercel](https://docs.parallel.ai/integrations/vercel)
- [AI Gateway Web Search](https://vercel.com/docs/ai-gateway/capabilities/web-search)
- [Web Search Agent cookbook](https://ai-sdk.dev/cookbook/node/web-search-agent#parallel-web)
- [Parallel Vercel template](https://github.com/parallel-web/parallel-cookbook/tree/main/typescript-recipes/parallel-vercel-template)
