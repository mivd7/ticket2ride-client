import {combineReducers} from 'redux'
import events from './events'
import tickets from './tickets'
import event from './event'
import comments from './comments'
import ticket from './ticket'

export default combineReducers({
  events,
  event,
  tickets,
  ticket,
  comments
})
