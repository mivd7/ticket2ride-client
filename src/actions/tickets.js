import request from 'superagent'
import {isExpired} from '../auth/jwt'
import {logout} from './users'

export const TICKETS_FETCHED = 'TICKETS_FETCHED'
export const TICKET_FETCHED = 'TICKET_FETCHED'
export const TICKET_UPDATE_SUCCESS = 'TICKET_UPDATE_SUCCESS'
export const TICKET_DELETE_SUCCESS = 'TICKET_DELETE_SUCCESS'
export const TICKET_CREATE_SUCCESS = 'TICKET_CREATE_SUCCESS'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const UPDATE_TICKETINFO = 'UPDATE_TICKETINFO'
export const UPDATE_TICKETS = 'UPDATE_TICKETS'

const baseUrl = 'http://localhost:4000'

const ticketsFetched = tickets => ({
  type: TICKETS_FETCHED,
  tickets
})

const ticketFetched = ticket => ({
  type: TICKET_FETCHED,
  ticket
})

const ticketUpdateSuccess = ticket => ({
  type: TICKET_UPDATE_SUCCESS,
  ticket
})

const ticketDeleteSuccess = ticketId => ({
  type: TICKET_DELETE_SUCCESS,
  ticketId
})

const ticketCreateSuccess = ticket => ({
  type: TICKET_CREATE_SUCCESS,
  payload: ticket
})

const updateProfile = (profile) => ({
    type: UPDATE_PROFILE,
    payload: profile
});

const updateTicketInfo = (ticketInfo) => ({
    type: UPDATE_TICKETINFO,
    payload: ticketInfo
})

const updateTickets = (tickets) => ({
    type: UPDATE_TICKETS,
    payload: tickets
})

export const getTicketsByEvent = (eventId) => (dispatch) => {

    request
        .get(`${baseUrl}/events/${eventId}/tickets`)
        .then(result => {
            dispatch(updateTickets(result.body['tickets']));
            // dispatch(updateTicketInfo(result.body['ticketInfo']));
            dispatch(updateProfile(result.body['profile']));
        })
        .catch(err => console.error(err))

}

export const createTicket = (eventId, description, price, thumbnail) => (dispatch, getState) => {

    const state = getState();
    if (!state.currentUser) return null;
    const jwt = state.currentUser.jwt;
    if (isExpired(jwt)) return dispatch(logout());

    request
      .post(`${baseUrl}/events/${eventId}/tickets`)
      .set('Authorization', `Bearer ${jwt}`)
      .send({ description, price, thumbnail })
      .then(result => {
          dispatch(updateTicketInfo(result.body['ticketsInfo']))
          dispatch(ticketCreateSuccess(result.body.ticketPayload)) ;
          dispatch(updateProfile(result.body.profilePayload));
        })
      .catch(err => console.error(err))
}

export const loadTickets = () => (dispatch, getState) => {
  const state = getState();
  if (!state.currentUser) return null;
  const jwt = state.currentUser.jwt;
  if (isExpired(jwt)) return dispatch(logout());

  request(`${baseUrl}/tickets/`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch(ticketsFetched(response.body))
    })
    .catch(console.error)
}

export const loadTicket = (id) => (dispatch, getState) => {
  const state = getState();
  if (!state.currentUser) return null;
  const jwt = state.currentUser.jwt;
  if (isExpired(jwt)) return dispatch(logout());

  request(`${baseUrl}/tickets/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch(ticketFetched(response.body))
    })
    .catch(console.error)
}

export const updateTicket = (id, data) => (dispatch, getState) => {
  const state = getState();
  if (!state.currentUser) return null;
  const jwt = state.currentUser.jwt;
  if (isExpired(jwt)) return dispatch(logout())

  request
    .set('Authorization', `Bearer ${jwt}`)
    .put(`${baseUrl}/tickets/${id}`)
    .send(data)
    .then(response => {
      dispatch(ticketUpdateSuccess(response.body))
    })
    .catch(console.error)
}

export const deleteTicket = id => (dispatch, getState) => {
  const state = getState();
  if (!state.currentUser) return null;
  const jwt = state.currentUser.jwt;
  if (isExpired(jwt)) return dispatch(logout())

  request
    .set('Authorization', `Bearer ${jwt}`)
    .delete(`${baseUrl}/tickets/${id}`)
    .then(response => {
      dispatch(ticketDeleteSuccess(id))
    })
    .catch(console.error)
}
