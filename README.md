# AI Data Generata

This app allows users to generate JSON data based on input prompt using OpenAI's GPT-3 language model.

![Data Generata](/public/assets/data-generata_.png)

The app is designed to use the OpenAI API to generate answers to prompts provided by the user. It utilizes the "openai" package to interface with the API, and requires an API key to be set as an environment variable named "OPENAI_API_KEY".

---

## Getting Started

### Add your OpenAI API key

Create an account at https://platform.openai.com/signup and obtain your API key.

Copy the `.env.local.example` file to `.env.local`:

```shell
cp .env.local.example .env.local
```

Open the `.env.local` file and add your OpenAI API key:

```shell
OPENAI_API_KEY=your_api_key_here

```

### Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
