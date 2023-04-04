import { createAnswer } from "@/services/openai/config.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const answer = await createAnswer(req.body);
    return res.status(200).json({
      answer,
    });
  }
}
