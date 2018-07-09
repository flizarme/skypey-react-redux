import { SET_TYPING_VALUE, SEND_MESSAGE } from './../actions/typingActions'

const initialState = ''

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;
    case SEND_MESSAGE:
      return "";
    default:
      return state
  }
}
