import request from 'superagent'

export const TICKETS_FETCHED = 'TICKETS_FETCHED'
export const TICKET_FETCHED = 'TICKET_FETCHED'
export const TICKET_UPDATE_SUCCESS = 'TICKET_UPDATE_SUCCESS'
export const TICKET_DELETE_SUCCESS = 'TICKET_DELETE_SUCCESS'
export const TICKET_CREATE_SUCCESS = 'TICKET_CREATE_SUCCESS'

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
  ticket
})

export const getTicketsByEvent = (eventId) => dispatch => {
  request(`${baseUrl}/events/${eventId}/tickets`)
    .then(response => {
      dispatch(ticketsFetched(response.body))
    })
    .catch(console.error)
}

export const createTicket = (data, eventId) => dispatch => {
  request
    .post(`${baseUrl}/events/${eventId}/tickets`)
    .send(data)
    .then(response => {
      dispatch(ticketCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const loadTickets = () => (dispatch, getState) => {
  if (getState().tickets) return

  request(`${baseUrl}/tickets`)
    .then(response => {
      dispatch(ticketsFetched(response.body))
    })
    .catch(console.error)
}

export const loadTicket = (id) => (dispatch, getState) => {
  const state = getState().ticket
  if (state && state.id === id) return

  request(`${baseUrl}/tickets/${id}`)
    .then(response => {
      dispatch(ticketFetched(response.body))
    })
    .catch(console.error)
}

export const updateTicket = (id, data) => dispatch => {
  request
    .put(`${baseUrl}/tickets/${id}`)
    .send(data)
    .then(response => {
      dispatch(ticketUpdateSuccess(response.body))
    })
    .catch(console.error)
}

export const deleteTicket = id => dispatch => {
  request
    .delete(`${baseUrl}/tickets/${id}`)
    .then(response => {
      dispatch(ticketDeleteSuccess(id))
    })
    .catch(console.error)
}
