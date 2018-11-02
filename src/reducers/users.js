import {ADD_USER, UPDATE_USERS} from '../actions/users'
import {USER_LOGOUT} from '../actions/users'

/*
The state will contain the users in an object with the game ID as key
*/

export default (state = {}, {type, payload}) => {
  switch (type) {
    case USER_LOGOUT:
      return null

    case ADD_USER:
      return {
        ...state,
        [payload.id]: payload
      }
    // case UPDATE_USER:
    //     const aux = {...state}
    //     aux[payload.id] = payload
    //     return aux

    case UPDATE_USERS:
      return payload.reduce((users, user) => {
        users[user.id] = user
        return users
      }, {})

    default:
      return state
  }
}
