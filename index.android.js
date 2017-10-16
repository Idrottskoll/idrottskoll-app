import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import configureStore from './configureStore';
import App from './src';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const ReduxApp = () => (
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('idrottskollApp', () => ReduxApp);
