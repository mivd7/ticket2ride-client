import {FETCHED_USER} from '../actions/users'

export default function (state = null, action) {
  switch(action.type) {
    case FETCHED_USER:
      return action.payload
    default:
      return state
  }
}
