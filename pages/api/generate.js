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
  let today = new Date().toLocaleDateString();
  const datesChecked = [];
  for (let d = 0; d < data.length; d++) {
    const time = data[d].timestamp;
    var date = new Date(time.seconds * 1000).toLocaleDateString("en-US");
    date == today ? datesChecked.push(date) : null;
  }
  datesChecked.length > 10 ? (timestampMax = false) : null;
}

export default async function (req, res) {
  await checkTimestamps();
  if (timestampMax === true) {
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: generatePrompt(req.body.code),
      temperature: 0.7,
    });
    createFirebaseData(req.body.code, completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
  } else {
    res
      .status(200)
      .json({ result: "Max requests exceeded. Please try again later." });
  }
}

function generatePrompt(code) {
  return `
  teacher:
  ${code}
  
  student: what is this code doing? (if it isn't a code type 'This isn't code')

  teacher:`;
}
