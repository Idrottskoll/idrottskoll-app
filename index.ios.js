import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './src/reducers';
import configureStore from './configureStore';
import App from './src';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const ReduxApp = () => (
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
);

// const store = configureStore();
// const ReduxApp = () => (
//     <Provider store={store}>
//         <App />
//     </Provider>
// );

AppRegistry.registerComponent('idrottskollApp', () => ReduxApp);
