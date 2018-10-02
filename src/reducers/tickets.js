import {TICKET_FETCHED} from '../actions/tickets'

export default (state = null, {type, payload}) => {
  switch (type) {
    case TICKET_FETCHED:
      const aux = {...state}
      aux[payload.id] = payload
      return aux
    default:
      return state
    }
  }
