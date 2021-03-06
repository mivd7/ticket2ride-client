import {PROFILE_FETCHED} from '../actions/tickets'

export default function (state = null, action) {
  switch(action.type) {
    case PROFILE_FETCHED:
      const output = Object.assign({}, action.profile)
      return output
    default:
      return state
  }
}
