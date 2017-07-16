import fetch from 'isomorphic-fetch'
import { Client, TrackHandler, PlaylistHandler} from 'spotify-sdk';

import config from '../config';

let client = Client.instance;

client.settings = {
    clientId: config.SPOTIFY_CLIENT_ID,
    secretId: config.SPOTIFY_CLIENT_SECRET,
    redirect_uri: config.SPOTIFY_REDIRECT_URL,
};

async function getSpotifyAccessToken() { 

  
  const body = {
    client_id: config.SPOTIFY_CLIENT_ID,
    response_type: 'code',
    redurect_uri: config.SPOTIFY_REDIRECT_URL
  }
  // setup request options
  const options = {
    method: "GET",
    body: JSON.stringify(body),
  };

  // make call to Spotify API
  const response = await fetch(config.SPOTIFY_AUTHORIZE_URL, options);
  // get response access token
  const token = await response.json();

  return token;
}

const emotionsAPI = {
  getEmotions: getEmotions,
}

export default emotionsAPI;