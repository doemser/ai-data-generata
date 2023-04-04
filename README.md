# Talk to anyone you like

![Rick Sanchez](/public/assets/rick-sanchez.png)

This repository provides an isolated entrypoint into the world of fetching results from OpenAI's API. It's designed for simplicity and ease of use, perfect for beginners who want to start exploring the powerful capabilities of OpenAI's GPT engines.

The app allows users to input a persona and a question, and uses OpenAI's API to generate a response to the question from the perspective of the specified persona. The app is built using React and the generated response is displayed in real-time on the webpage.

## Getting Started

### Add your API key

Create an account at https://platform.openai.com/signup and obtain your API key.

Copy the `.env.local.example` file to `.env.local`:

```shell
cp .env.local.example .env.local
```

Open the `.env` file and add your OpenAI API key:

```shell
OPENAI_API_KEY=your_api_key_here

```

> If you have a free API Key you need to take the commented changes in config.js and index.js, else you are already ready to go.

### Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
