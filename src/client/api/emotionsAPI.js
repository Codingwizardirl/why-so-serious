import config from '../config';
import fetch from 'isomorphic-fetch';


async function getEmotions(url) {
  const options = {
    method: 'POST',
    body: {
      url,
    },
  };

 // make call to private API
  const response = await fetch('/emotions', options);
 // get response data
  const data = await response.json();
  return data;
}


async function getEmotionsDirectly(url) {
  const body = {
    url,
  };

  // setup request options
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': config.MICROSOFT_EMOTION_API_KEY,
    },
    body: JSON.stringify(body),
  };

  // make call to Microsoft Emotion API
  const response = await fetch(config.MICROSOFT_EMOTIONS_API_URL, options);
  // get response data
  const data = await response.json();

  return data;
}

const emotionsAPI = {
  getEmotions,
  getEmotionsDirectly,
};

export default emotionsAPI;
