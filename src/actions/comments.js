import request from 'superagent'
import {updateTicketInfo} from './tickets'

export const COMMENTS_FETCHED = 'COMMENTS_FETCHED'
export const COMMENT_FETCHED = 'COMMENT_FETCHED'
export const COMMENT_UPDATE_SUCCESS = 'COMMENT_UPDATE_SUCCESS'
export const COMMENT_DELETE_SUCCESS = 'COMMENT_DELETE_SUCCESS'
export const COMMENT_CREATE_SUCCESS = 'COMMENT_CREATE_SUCCESS'

const baseUrl = 'http://localhost:4000'

const commentsFetched = comments => ({
  type: COMMENTS_FETCHED,
  comments
})

const commentFetched = comment => ({
  type: COMMENT_FETCHED,
  comment
})

const commentUpdateSuccess = comment => ({
  type: COMMENT_UPDATE_SUCCESS,
  comment
})

const commentDeleteSuccess = commentId => ({
  type: COMMENT_DELETE_SUCCESS,
  commentId
})

const commentCreateSuccess = comment => ({
  type: COMMENT_CREATE_SUCCESS,
  comment
})

export const getCommentsByTicket = (ticketId) => dispatch => {
  request(`${baseUrl}/tickets/${ticketId}/comments`)
    .then(response => {
      dispatch(commentsFetched(response.body))
    })
    .catch(console.error)
}

export const createComment = (data, ticketId) => dispatch => {
  request
    .post(`${baseUrl}/tickets/${ticketId}/comments`)
    .send(data)
    .then(response => {
      dispatch(commentCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const loadComments = (ticketId) => (dispatch, getState) => {
  if (getState().comments) return

  request(`${baseUrl}/tickets/${ticketId}/comments`)
    .then(response => {
      dispatch(commentsFetched(response.body.comments))
      dispatch(updateTicketInfo(response.body.ticketInfo))
    })
    .catch(console.error)
}

// export const loadComment = (id) => (dispatch, getState) => {
//   const state = getState().comment
//   if (state && state.id === id) return
//
//   request(`${baseUrl}/comments/${id}`)
//     .then(response => {
//       dispatch(commentFetched(response.body))
//     })
//     .catch(console.error)
// }

export const updateComment = (id, data) => dispatch => {
  request
    .put(`${baseUrl}/comments/${id}`)
    .send(data)
    .then(response => {
      dispatch(commentUpdateSuccess(response.body))
    })
    .catch(console.error)
}

export const deleteComment = id => dispatch => {
  request
    .delete(`${baseUrl}/comments/${id}`)
    .then(response => {
      dispatch(commentDeleteSuccess(id))
    })
    .catch(console.error)
}
