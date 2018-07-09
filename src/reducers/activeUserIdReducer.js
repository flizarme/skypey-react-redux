import { SET_ACTIVE_USER_ID } from './../actions/activeUserIdActions'

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_USER_ID:
      return action.payload
    default:
      return state
  }
}
