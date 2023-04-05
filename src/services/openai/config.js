import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function createAnswer(prompt) {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 1,
    messages: [
      {
        role: "system",
        content: `
        Create data for ${prompt.persona}.
        Desired Behaviour:
        - create ${prompt.amount} Data objects
        - exclusively answer in a valid json format
        - use this interfaces:

        interface Data {
          ${prompt.dataKeys.map((key) => {
            return `${key.value}: ${key.type}`;
          })}
        }

        interface Response {
          data: Data[];
        }
        `,
      },
    ],
    max_tokens: 2048,
  });

  return response.data.choices[0].message;
}
