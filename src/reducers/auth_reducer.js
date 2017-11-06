import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_USER_DATA,
    USER_REQUESTED_NEW_PASSWPRD,
    ACTIVE_CLUBS
} from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true };
        case UNAUTH_USER:
            return { ...state, authenticated: false };
        case AUTH_ERROR:
            return { ...state, error: action.payload };
        case FETCH_USER_DATA:
            return { ...state, data: action.payload };
        case USER_REQUESTED_NEW_PASSWPRD:
            return { ...state, data: action.payload };
        case ACTIVE_CLUBS:
            return { ...state, activeClubs: action.payload };
    }
    return state;
}
