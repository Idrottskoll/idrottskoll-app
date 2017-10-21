'use strict';

import AsyncStorage from 'react-native';
import axios from 'axios';
import { StackNavigator } from 'react-navigation';

import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE } from './types';
import { ROOT_URL, SPECIAL_TOKEN } from './config';

/**
* @param string email, string password
* @return function
*/
export function signinUser({ email, password }) {
    /**
    * @param dispatch
    * @return bool AUTH_USER
    */
    return function(dispatch) {
        axios
            .post(`${ROOT_URL}/login`, { email, password })
            .then(response => {
                // response.data.token
                dispatch({ type: AUTH_USER });
                alert('loggd in');
            })
            .catch(e => {
                dispatch(authError('Fel e-post eller lösenord...'));
            });
    };
}

/**
* @param string name, string email, string password
* @return function
*/
export function signupUser({ email, name, password, passwordConfirmation }) {
    /**
    * @param dispatch
    * @return bool AUTH_USER
    */
    return function(dispatch) {
        axios
            .post(`${ROOT_URL}/register`, {
                email,
                name,
                password,
                passwordConfirmation
            })
            .then(response => {
                dispatch({ type: AUTH_USER });
                alert(response);
            })
            .catch(response => {
                // response.data.error
                dispatch(authError('Error with signup, username is taken?'));
            });
    };
}

/**
* @param request, error
* @return OBJ, error
*/
export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function signoutUser() {
    removeUserToken('token');
    return { type: UNAUTH_USER };
}
