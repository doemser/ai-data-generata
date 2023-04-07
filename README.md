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

---

## Contribute to this project

Contributions are super welcome! <3

If you would like to contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your changes.
4. Make your changes and commit them to your branch.
5. Push your branch to your forked repository on GitHub.
6. Create a pull request from your branch to our repository.
7. Wait for a review and approval.

Please also provide a clear and concise description of your changes in the pull request.
