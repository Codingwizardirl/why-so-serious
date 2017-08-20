async function getPlaylists(url) {
  // setup request options
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  };

  // make call to private API
  const response = await fetch('/playlists', options);
  // get response data
  const data = await response.json();
  return data;
}

const playlistsAPI = {
  getPlaylists,
};

export default playlistsAPI;
