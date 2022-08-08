// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Configuration, OpenAIApi } from "openai";
import { createFirebaseData, getFirebaseData } from "./firebase-config";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
let timestampMax = true;

async function checkTimestamps() {
  const data = await getFirebaseData();
  const today = new Date().toLocaleDateString();
  const datesChecked = [];
  for (let d = 0; d < data.length; d++) {
    const time = data[d].timestamp;
    const date = new Date(time.seconds * 1000).toLocaleDateString("en-US");
    date === today ? datesChecked.push(date) : null;
  }
  datesChecked.length > 15 ? (timestampMax = false) : null;
}

export default async function openaiCreate(req, res) {
  await checkTimestamps();
  if (timestampMax === true) {
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: generatePrompt(req.body.code),
      temperature: 0.7,
    });
    const response = completion.data.choices[0].text;
    // const response = "this is a test";
    //content filter
    const filterL = await contenFilter(response);

    if (filterL == "0" || filterL == "1") {
      response === "This isn't code" || "This isn't code."
        ? null
        : createFirebaseData(req.body.code, response);
      res.status(200).json({ result: response });
    } else {
      res.status(200).json({ text: "Try again, after modifying the input." });
    }
  } else {
    res.status(200).json({
      result:
        "We're sorry, but you have exceeded the maximum number of requests. Please try again later.",
    });
  }
}
async function contenFilter(resp) {
  const filterResponse = await openai
    .createCompletion({
      model: "content-filter-alpha",
      prompt: `<|endoftext|>${resp}\n--\nLabel:`,
      max_tokens: 1,
      temperature: 0,
      top_p: 0,
      logprobs: 10,
    })
    .catch((error) => {});
  return filterResponse.data["choices"][0]["text"];
}

function generatePrompt(code) {
  return `
  teacher:
  ${code}
  
  student: what is this code doing? (if this isn't code reply 'This isn't code')

  teacher:`;
}
