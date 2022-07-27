// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.code),
    temperature: 0.7,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(code) {
  return `
  teacher:
  ${code}
  
  student: what is this code doing? (if it isn't a code type 'This isn't code')

  teacher:`;
}
