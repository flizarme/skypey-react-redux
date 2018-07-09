import {getMessages} from './../utils/dataGenerator'
import {SEND_MESSAGE} from './../actions/typingActions'
import {keys} from 'lodash'

const initialState = getMessages(10)

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = +keys(allUserMsgs).pop() + 1;

      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };
    default:
      return state
  }
}
