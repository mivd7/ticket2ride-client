import request from 'superagent'
import {isExpired} from '../auth/jwt'
import {logout} from './users'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_FETCHED = 'EVENT_FETCHED'
export const EVENT_UPDATE_SUCCESS = 'EVENT_UPDATE_SUCCESS'
export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS'
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'

const baseUrl = 'http://localhost:4000'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
})

const eventUpdateSuccess = event => ({
  type: EVENT_UPDATE_SUCCESS,
  event
})

const eventDeleteSuccess = eventId => ({
  type: EVENT_DELETE_SUCCESS,
  eventId
})

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
})

export const createEvent = (data) => dispatch => {
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const loadEvents = () => (dispatch, getState) => {
  if (getState().events) return

  request(`${baseUrl}/events`)
    .then(response => {
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}

export const loadEvent = (id) => (dispatch, getState) => {
  const state = getState().event
  if (state && state.id === id) return

  request(`${baseUrl}/events/${id}`)
    .then(response => {
      dispatch(eventFetched(response.body))
    })
    .catch(console.error)
}

// export const createEvent = (eventId, description, price, thumbnail) => (dispatch, getState) => {
//
//     const state = getState();
//     if (!state.currentUser) return null;
//     const jwt = state.currentUser.jwt;
//     if (isExpired(jwt)) return dispatch(logout());
//
//     request
//       .post(`${baseUrl}/events/${eventId}/Events`)
//       .set('Authorization', `Bearer ${jwt}`)
//       .send({ description, price, thumbnail })
//       .then(result => {
//           dispatch(EventCreateSuccess(result.body)) ;
//           // dispatch(updateCustomers(result.body.custommerPayload));
//
//     })
//       .catch(err => console.error(err))
// }

export const updateEvent = (id, data) => (dispatch, getState) => {
  const state = getState();
  if (!state.currentUser) return null;
  const jwt = state.currentUser.jwt;
  if (isExpired(jwt)) return dispatch(logout())

  request
    .set('Authorization', `Bearer ${jwt}`)
    .put(`${baseUrl}/Events/${id}`)
    .send(data)
    .then(response => {
      dispatch(eventUpdateSuccess(response.body))
    })
    .catch(console.error)
}

export const deleteEvent = id => (dispatch, getState) => {
  const state = getState();
  if (!state.currentUser) return null;
  const jwt = state.currentUser.jwt;
  if (isExpired(jwt)) return dispatch(logout())

  request
    .set('Authorization', `Bearer ${jwt}`)
    .delete(`${baseUrl}/Events/${id}`)
    .then(response => {
      dispatch(eventDeleteSuccess(id))
    })
    .catch(console.error)
}
