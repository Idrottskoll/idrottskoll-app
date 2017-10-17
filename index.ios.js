import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import configureStore from './configureStore';
import App from './src';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const ReduxApp = () => (
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('idrottskollApp', () => ReduxApp);

// https://www.udemy.com/react-redux-tutorial/learn/v4/t/lecture/4962654?start=0
// http://95.85.49.182/api/register
