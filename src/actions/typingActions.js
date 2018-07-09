export const SET_TYPING_VALUE = "typing/SET_TYPING_VALUE";
export const SEND_MESSAGE = "typing/SEND_MESSAGE";

export const setTypingValue = value => {
  return dispatch =>
    dispatch({
      type: SET_TYPING_VALUE,
      payload: value
    })
};

export const sendMessage = (message, userId) => {
  return dispatch => 
    dispatch({
      type: SEND_MESSAGE,
      payload: {
        message,
        userId
      }
    })
}
