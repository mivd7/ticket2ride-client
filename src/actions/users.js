import * as request from 'superagent';
import {baseUrl} from '../constants'

export const ADD_USER = 'ADD_USER';
export const SET_USER = 'SET_USER';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USERS = 'UPDATE_USERS';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export const USER_LOGOUT = 'USER_LOGOUT';

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED';

export const CONNECTED_USER = 'CONNECTED_USER'


export const logout = () => ({
  type: USER_LOGOUT
});

const userLoginSuccess = (login) => ({
  type: USER_LOGIN_SUCCESS,
  payload: login
});

const userLoginFailed = (error) => ({
  type: USER_LOGIN_FAILED,
  payload: error || 'Unknown error'
});

const userSignupFailed = (error) => ({
  type: USER_SIGNUP_FAILED,
  payload: error || 'Unknown error'
});

const userSignupSuccess = () => ({
  type: USER_SIGNUP_SUCCESS
});

const updateUsers = (users) => ({
  type: UPDATE_USERS,
  payload: users
});

const connectedUser = (user) => ({
  type: CONNECTED_USER,
  payload: user
})

export const login = (email, password) => (dispatch) =>
	request
		.post(`${baseUrl}/logins`)
    .send({email, password})
    .then(result => dispatch(userLoginSuccess(result.body)))
    .catch(err => {
    	if (err.status === 400) {
    		dispatch(userLoginFailed(err.response.body.message));
    	}
    	else {
    		console.error(err);
    	}
    });

export const signup = (firstName, lastName, email, password) => (dispatch) =>
	request
		.post(`${baseUrl}/users`)
		.send({ firstName, lastName, email, password })
		.then(result => {
			dispatch(userSignupSuccess());
		})
		.catch(err => {
			if (err.status === 400) {
				dispatch(userSignupFailed(err.response.body.message));
			}
			else {
				console.error(err);
			}
		});

export const getUsers = () => (dispatch) => {

  request
    .get(`${baseUrl}/users`)
    .then(result => dispatch(updateUsers(result.body)))
    .catch(err => console.error(err))
};

export const getUser = (id) => (dispatch) => {
    request
      .get(`${baseUrl}/users/${id}`)
      .then(response => {
        dispatch(connectedUser(response.body))
      })
      .catch(console.error)
  }

//set user voert middels een connectie met Socket IO
