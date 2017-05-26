import config from '../config';
import fetch from 'isomorphic-fetch'

async function getEmotions(url) { 

  const body = {
    url: url,
  }
  
  // setup request options
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": config.MICROSOFT_EMOTION_API_KEY,
    },
    body: JSON.stringify(body),
  };

  // make call to Microsoft Emotions API
  const response = await fetch(config.MICROSOFT_EMOTIONS_API_URL, options);
  // get response data
  const data = await response.json();

  return data;
}

const emotionsAPI = {
  getEmotions: getEmotions,
}

export default emotionsAPI;