import AsyncStorage from 'react-native';
import axios from 'axios';

import Home from '../views/Home/Home';
import { AUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://95.85.49.182';

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

                AsyncStorage.setItem('token', response.date.token);

                alert('true');

                // redirect the user to home screen
                this.props.navigation.navigate('Home');
            })
            .catch(() => {
                dispatch(authError('Fel e-post eller lösenord'));
            });
    };
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error,
    };
}
