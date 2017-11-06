'use strict';

import { AsyncStorage } from 'react-native';
import axios from 'axios';

import {
    AUTH_USER,
    AUTH_ERROR,
    UNAUTH_USER,
    FETCH_USER_DATA,
    USER_REQUESTED_NEW_PASSWPRD
} from './types';
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
        return axios
            .post(`${ROOT_URL}/login`, { email, password })
            .then(response => {
                AsyncStorage.setItem(
                    'token',
                    SPECIAL_TOKEN + response.data.token
                );
                dispatch({ type: AUTH_USER });
                return response;
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
        return axios
            .post(`${ROOT_URL}/register`, {
                email,
                name,
                password,
                passwordConfirmation
            })
            .then(response => {
                AsyncStorage.setItem(
                    'token',
                    SPECIAL_TOKEN + response.data.token
                );
                dispatch({ type: AUTH_USER });
                return response;
            })
            .catch(e => {
                // log the error to the user if API proccesses the request
                dispatch(
                    authError(
                        'Något gick fel när du försökte skapa ditt konto... Är E-post adressen upptage?'
                    )
                );
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

/**
* @param string data (request url endpoint)
* @return json data (the auth user data)
*/
export function fetchAuthUserData(data) {
    return async function(dispatch) {
        axios
            .get(`${ROOT_URL}/${data}`, {
                headers: { Authorization: await AsyncStorage.getItem('token') }
            })
            .then(response => {
                dispatch({
                    type: FETCH_USER_DATA,
                    // .name will get userName
                    payload: response.data
                });
            });
    };
}

export function changeUserPassword(email) {
    return function(dispatch) {
        return axios
            .post(`${ROOT_URL}/account/forgot`, { email: email })
            .then(response => {
                return response;
            })
            .catch(e => {
                console.log(e);
            });
    };
}
