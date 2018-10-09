import {USER_LOGIN_SUCCESS, USER_LOGOUT,} from '../actions/users'
import {localStorageJwtKey} from '../constants'

export const storeJwt = store => next => action => {
  try {
    if (action.type === USER_LOGIN_SUCCESS) {
      localStorage.setItem(localStorageJwtKey, action.payload.jwt)
      console.log(localStorage)
    }
    if (action.type === USER_LOGOUT) {
      localStorage.removeItem(localStorageJwtKey)
    }
    // if (action.type === CONNECTED_USER) {
    //   localStorage.setItem(action.payload.user)
    // }
  }
  catch (e) {
    console.log(`Interaction with LocalStorage went wrong`, e)
  }

  next(action)
}

export const socketIo = socketio => store => next => action => {
  if (action.type === USER_LOGIN_SUCCESS) {
    socketio.connect(store.dispatch, action.payload)
  }
  if (action.type === USER_LOGOUT) {
    socketio.disconnect()
  }

  next(action)
}
