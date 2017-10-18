import AsyncStorage from 'react-native';
import axios from 'axios';

import ProfileScreen from '../views/Profile/ProfileScreen';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

const ROOT_URL = 'http://95.85.49.182/api';

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
            .post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });

                // AsyncStorage.setItem('token', response.data.token);

                alert('true ' + email, password);

                // redirect the user to HomeScreen screen
                this.props.navigation.navigate('ProfileScreen');
            })
            .catch(() => {
                alert('false ' + email, password);
                // AsyncStorage.setItem('token', 'response.data.token');
                dispatch(authError('Fel e-post eller lösenord...'));
                this.props.navigation.navigate('ProfileScreen');
            });
    };
}

export function signupUser({ name, email, password }) {
    return function(dispatch) {
        axios
            .post(`${ROOT_URL}/signup`, { name, email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });
                // AsyncStorage.setItem('token', 'response.data.token');
                // this.props.navigation.navigate('Home');
                alert('true ' + email, password);
            })
            .catch(response => dispatch(authError(response.data.error)));
    };
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error,
    };
}

export function signoutUser() {
    //AsyncStorage.removeItem('token');
    return { type: UNAUTH_USER };
}
