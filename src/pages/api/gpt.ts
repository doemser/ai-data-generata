import type { NextApiRequest, NextApiResponse } from "next";
import { createAnswer } from "../../services/openai/config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const answer = await createAnswer(req.body);
    return res.status(200).json({
      answer,
    });
  }
}
