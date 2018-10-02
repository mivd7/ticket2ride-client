import {combineReducers} from 'redux'
import events from './events'
import tickets from './tickets'
import event from './event'

export default combineReducers({
  events,
  event,
  tickets
})
