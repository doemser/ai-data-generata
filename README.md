# AI Data Generata

![Data Generata](/public/assets/data-generata.png)

This app allows users to generate JSON data based on input prompt using OpenAI's GPT-3 language model and display the generated output in a syntax-highlighted code block, with the ability to add custom data keys.

## Getting Started

### Add your API key

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
