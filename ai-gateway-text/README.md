# AI Gateway text generation

Streams text with [Vercel AI Gateway](https://vercel.com/docs/ai-gateway) and `openai/gpt-5.4` via the AI SDK [`streamText`](https://ai-sdk.dev/docs/ai-sdk-core/generating-text).

## Setup

```bash
cd ai-gateway-text
npm install
```

Add `AI_GATEWAY_API_KEY` to `.env.local`.

## Run

```bash
npm run generate
npm run generate -- "What is the capital of France?"
```

Logs streamed text, then token usage and finish reason.
