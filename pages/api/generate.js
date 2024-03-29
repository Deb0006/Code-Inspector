import { Configuration, OpenAIApi } from "openai";
import { createFirebaseData, getFirebaseData } from "./firebase-config";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
let allowRequest = true;

async function checkTimestamps(userid) {
  const data = await getFirebaseData();

  const today = new Date().toLocaleDateString();
  let allRequests = 0;
  let userRequests = 0;

  for (let d = 0; d < data.length; d++) {
    let time = data[d].timestamp;
    let date = new Date(time.seconds * 1000).toLocaleDateString("en-US");
    if (userid === "null") {
      if (date == today) {
        allRequests++;
      }
    } else {
      if (date == today) {
        allRequests++;
      }
      if (date == today && data[d].uid === userid) {
        userRequests++;
      }
    }
  }

  if (userid === "null") {
    if (allRequests >= 10) {
      allowRequest = false;
    }
  } else {
    if (allRequests >= 30) {
      allowRequest = false;
    } else {
      if (userRequests >= 5) {
        allowRequest = false;
      }
    }
  }
}

export default async function openaiCreate(req, res) {
  await checkTimestamps(req.body.uid);

  if (allowRequest === true) {
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: generatePrompt(req.body.code),
      temperature: 0.7,
      top_p: 1,
      max_tokens: 35,
    });
    const response = completion.data.choices[0].text;

    //content filter
    const filterL = await contentFilter(response);
    if (filterL == "0" || filterL == "1") {
      if (response.includes("This isn't code")) {
        createFirebaseData(req.body.code, response, req.body.uid, false);
      } else {
        createFirebaseData(req.body.code, response, req.body.uid, true);
      }
      res.status(200).json({ result: response });
    } else {
      res.status(200).json({ text: "Try again, after modifying the input." });
      createFirebaseData(req.body.code, response, req.body.uid, false);
    }
  } else {
    res.status(200).json({
      result:
        "We're sorry, you have exceeded the maximum number of requests. Please try again later.",
    });
  }
}
async function contentFilter(resp) {
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
