async function getPlaylistByEmotions(emotions) {
  // setup request options
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ emotions }),
  };

  // make call to private API
  const response = await fetch('/get_playlist', options);
  // get response data
  const data = await response.json();
  return data;
}

const playlistsAPI = {
  getPlaylistByEmotions,
};

export default playlistsAPI;
