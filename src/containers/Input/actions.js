import emotionsAPI from '../../api/emotionsAPI'

export const REQUEST_EMOTIONS = 'REQUEST_EMOTIONS';
export const RECEIVE_EMOTIONS = 'RECEIVE_EMOTIONS';


const requestEmotions = (url) => (
  {
    type: REQUEST_EMOTIONS,
    payload: url,
  }
);

const receiveEmotions = (data) => (
  {
    type: RECEIVE_EMOTIONS,
    payload: data,
  }
)

export const fetchEmotions = (url) => {
  return (dispatch) => {
    dispatch(requestEmotions(url));

    return emotionsAPI.getEmotions(url)
      .then(data => dispatch(receiveEmotions(data)))
      .catch(error => {
        console.log(error.message)
      })
  }
   
}