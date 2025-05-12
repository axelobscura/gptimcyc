import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // Grabbing the user's input
  const params = await request.json();

  // Passing it to Chat GPT API
  const response = await openai.chat.completions.create({
    model: "chatgpt-4o-latest",
    messages: [
      {
        role: "system",
        content:
          "Dar toda la información encontrada sobre temas de cemento y concreto realcionadas con la construcción. Agregar la bibliografía de las fuentes consultadas.",
          //content: "You are very grumpy. Please answer my questions with sarcasm, grumpiness, and anger."
      },
      {
        role: "user",
        content: params.prompt, // string that the user passes in
      },
    ],
    temperature: 1,
    max_tokens: 14369,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  // Send our response to the front end
  return NextResponse.json(response);
}
