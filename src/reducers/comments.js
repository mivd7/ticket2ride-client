import {COMMENTS_FETCHED, COMMENT_CREATE_SUCCESS} from '../actions/comments'

export default (state = null, action) => {
  switch (action.type) {
    case COMMENTS_FETCHED:
      return action.comments
    case COMMENT_CREATE_SUCCESS:
      return [action.comment, ...state]
    default:
      return state
    }
  }
