import emotionsAPI from '../api/emotionsAPI';

export const REQUEST_EMOTIONS = 'REQUEST_EMOTIONS';
export const RECEIVE_EMOTIONS = 'RECEIVE_EMOTIONS';
export const REQUEST_EMOTIONS_FAILED = 'REQUEST_EMOTIONS_FAILED';

const requestEmotions = url => (
  {
    type: REQUEST_EMOTIONS,
    payload: url,
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
  dispatch(requestEmotions(url));

  return emotionsAPI.getEmotions(url)
      .then(data => dispatch(receiveEmotions(data)))
      .catch((error) => {
        dispatch(requestEmotionsFailed());
      });
};
