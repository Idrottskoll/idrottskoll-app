'use strict';

import AsyncStorage from 'react-native';
import axios from 'axios';
import { StackNavigator } from 'react-navigation';

import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';
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
                dispatch({ type: AUTH_USER });
                alert(response.data.token);
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
export function signupUser({ name, email, password }) {
    /**
    * @param dispatch
    * @return bool AUTH_USER
    */
    return function(dispatch) {
        axios
            .post(`${ROOT_URL}/register`, { name, email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });
                alert(response);
            })
            // response.data.error
            .catch(response => dispatch(authError('response error')));
    };
}

/**
* @param request, error
* @return OBJ, error
*/
export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error,
    };
}

export function signoutUser() {
    removeUserToken('token');
    return { type: UNAUTH_USER };
}
