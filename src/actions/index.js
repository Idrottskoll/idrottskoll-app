import React from 'react';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { ROOT_URL, SPECIAL_TOKEN, SIGNIN_URL } from './config';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types';

export function signInUser({ email, password }) {
    return function(dispatch) {
        axios.post(ROOT_URL + SIGNIN_URL, { email, password })
        .then(response => {
            dispatch({ type: AUTH_USER });
            await AsyncStorage.setItem(
                'token',
                SPECIAL_TOKEN + response.data.token
            );
            .catch(() => {
                dispatch(authError('Bad Login Info'));
            });
        });
    };
}
