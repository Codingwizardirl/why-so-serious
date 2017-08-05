export const SET_TOKEN = 'SET_TOKEN';
export const RESET_TOKEN = 'RESET_TOKEN';

const setToken = token => (
  {
    type: SET_TOKEN,
    payload: token,
  }
);

const resetToken = () => (
  {
    type: RESET_TOKEN,
  }
);

export const receiveToken = (token, timeout) => (dispatch) => {
  dispatch(setToken(token));
  setTimeout(dispatch(resetToken), timeout);
};
