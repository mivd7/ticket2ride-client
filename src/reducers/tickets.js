import {TICKETS_FETCHED, TICKET_CREATE_SUCCESS, UPDATE_TICKETINFO, UPDATE_TICKETS} from '../actions/tickets'

export default (state = null, {type, payload}) => {
  switch (type) {
    case TICKETS_FETCHED:
      return payload

    case UPDATE_TICKETINFO:
      return payload.reduce((infos, info) => {
        infos[info.ticket_id] = info;
        return infos;
      }, {})

    case UPDATE_TICKETS:
      return  payload.reduce((tickets, ticket) => {
        tickets[ticket.id] = ticket;
        return tickets;
    }, []);

    case TICKET_CREATE_SUCCESS:
      return {
        ...state,
        [payload.id]: payload
      }
    default:
      return state
    }
  }
