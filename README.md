## Conversational AI Demo

## Setup

Set up the environment variables:

```bash
cp .env.example .env.local
```

Fill in `VOICE_AGENT_ID`, `VOICE_API_KEY`, and `BASIC_AUTH_PASSWORD` in `.env.local`. The password gates the entire site via HTTP Basic Auth.

Configure your voice agent and API key from your provider and set them in the `.env.local` file.

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Learn More

- Conversational AI SDK docs from your provider
