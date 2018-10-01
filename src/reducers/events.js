import {EVENTS_FETCHED, EVENT_DELETE_SUCCESS, EVENT_CREATE_SUCCESS} from '../actions/events'

export default function (state = null, action) {
  switch(action.type) {
    case EVENTS_FETCHED:
      return action.events

    case EVENT_CREATE_SUCCESS:
      return [action.event, ...state]

    case EVENT_DELETE_SUCCESS:
      return state && state.filter(event => event.id !== action.eventId)

    default:
      return state
  }
}
