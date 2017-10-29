'use strict';

import React from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import configureStore from './configureStore';
import App from './src/App';
import { AUTH_USER } from './src/actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

/**
* if true will invoke a user as AUTH_USER on page loade
*/
(async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        store.dispatch({ type: AUTH_USER });
        this.forceUpdate();
    }
    // else {
    //     store.dispatch({ type: UNAUTH_USER });
    // }
})();

const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('idrottskollApp', () => ReduxApp);

// 24 minuter in
// https://www.youtube.com/watch?v=Q20Kcbw3IR8
