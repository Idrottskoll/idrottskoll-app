'use strict';

import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';

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
                dispatch({ type: AUTH_USER });
                AsyncStorage.setItem(
                    'token',
                    SPECIAL_TOKEN + response.data.token
                );
                alert('Welcome ' + email);
                goBack('ProfileScreen');
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
                AsyncStorage.setItem(
                    'token',
                    SPECIAL_TOKEN + response.data.token
                );
                alert('Välkommen ' + name);
            })
            .catch(response => {
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
    AsyncStorage.removeItem('token');
    return { type: UNAUTH_USER };
}
