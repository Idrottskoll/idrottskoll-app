'use strict';

import { AsyncStorage } from 'react-native';
import axios from 'axios';

import {
    AUTH_USER,
    AUTH_ERROR,
    UNAUTH_USER,
    FETCH_USER_DATA,
    USER_REQUESTED_NEW_PASSWPRD,
    ACTIVE_CLUBS,
    LIVE_VIDEO
} from './types';
import { ROOT_URL, SPECIAL_TOKEN } from './config';

/**
 * @param obj email: email
 * @param ovj password: password
 *
 * @return obj response
 */
export function signinUser({ email, password }) {
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
 * @param obj name: name
 * @param obj email: email
 * @param obj password: password
 * @param obj passwordConfirmation: passwordConfirmation
 *
 * @return obj response
 */
export function signupUser({ email, name, password, passwordConfirmation }) {
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
 *
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
 *
 * @return obj response
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
            })
            .catch(e => {
                signoutUser();
                // toggle puch notifactation telling user thay are signed out
                return;
            });
    };
}

/**
 * @param string email
 *
 * @return obj response
 */
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

/**
 * @return arr response.data
 */
export function getActiveClubs() {
    return function(dispatch) {
        return axios
            .get(`${ROOT_URL}/club/active`)
            .then(response => {
                dispatch({ type: ACTIVE_CLUBS, payload: response.data });
                return response.data;
            })
            .catch(e => {
                console.log(e);
            });
    };
}

/**
 * @param obj club: club
 * @param obj dateTime: dateTime
 *
 * @return obj response
 */
export function orderNewVideo(order) {
    return async function() {
        return axios
            .post(`${ROOT_URL}/order/add`, {
                stream: order
            })
            .then(response => {
                return response;
            })
            .catch(e => {
                console.log(e);
            });
    };
}

// NOTE: Function is invoced in App.js foreach page load
/**
 * @return string token
 */
export function checkUserStatus() {
    return async function() {
        const token = await AsyncStorage.getItem('token');

        if (token) {
            return token;
        }
        return;
    };
}

// fetch live video, check if video is live on componentWillMount()
export function fetchLiveVideo() {
    return async function(dispatch) {
        return axios
            .get(`${ROOT_URL}/orders`)
            .then(response => {
                dispatch({
                    type: LIVE_VIDEO,
                    payload: response
                });
                return response;
            })
            .catch(e => {
                console.log(e);
            });
    };
}
