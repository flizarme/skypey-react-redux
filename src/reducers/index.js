
import { combineReducers } from 'redux'
import contacts from './contactsReducer'
import user from './userReducer'
import activeUserId from './activeUserIdReducer'
import messages from './messagesReducer'
import typing from './typingsReducer'


export default combineReducers({
  activeUserId, user, contacts, messages, typing
})
