import emotionsAPI from '../api/emotionsAPI';
import playlistsAPI from '../api/playlistsAPI';

export const REQUEST_EMOTIONS = 'REQUEST_EMOTIONS';
export const RECEIVE_EMOTIONS = 'RECEIVE_EMOTIONS';
export const REQUEST_EMOTIONS_FAILED = 'REQUEST_EMOTIONS_FAILED';

export const REQUEST_PLAYLISTS = 'REQUEST_PLAYLISTS';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const REQUEST_PLAYLISTS_FAILED = 'REQUEST_PLAYLISTS_FAILED';

const requestEmotions = () => (
  {
    type: REQUEST_EMOTIONS,
  }
);

const receiveEmotions = data => (
  {
    type: RECEIVE_EMOTIONS,
    payload: data,
  }
);

const requestEmotionsFailed = () => (
  {
    type: REQUEST_EMOTIONS_FAILED,
  }
);

export const fetchEmotions = url => (dispatch) => {
  dispatch(requestEmotions());

  return emotionsAPI.getEmotions(url)
      .then(data => dispatch(receiveEmotions(data)))
      .catch((error) => {
        dispatch(requestEmotionsFailed());
      });
};

const requestPlaylists = () => (
  {
    type: REQUEST_PLAYLISTS,
  }
);

const receivePlaylists = data => (
  {
    type: RECEIVE_PLAYLISTS,
    payload: data,
  }
);

const requestPlaylistsFailed = () => (
  {
    type: REQUEST_PLAYLISTS_FAILED,
  }
);

export const getPlaylists = url => (dispatch) => {
  dispatch(requestPlaylists());

  return playlistsAPI.getPlaylists(url)
      .then(data => dispatch(receivePlaylists(data)))
      .catch((error) => {
        dispatch(requestPlaylistsFailed());
      });
};
