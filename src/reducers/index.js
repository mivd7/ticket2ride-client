import {combineReducers} from 'redux'
import events from './events'
import tickets from './tickets'
import event from './event'
import comments from './comments'
import ticket from './ticket'
import users from './users'
import signup from './signup'
import currentUser from './currentUser'
import login from './login'

export default combineReducers({
  events,
  event,
  tickets,
  ticket,
  comments,
  users,
  currentUser,
  login,
  signup
})
