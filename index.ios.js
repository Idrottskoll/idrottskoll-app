import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './src';

const store = configureStore();

const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('idrottskollApp', () => ReduxApp);

// const createStoreWithMiddleware = applyMiddleware()(createStore);
// https://reactnavigation.org/docs/navigators/tab
// http://rants.broonix.ca/getting-started-with-react-native-and-redux/
// https://www.udemy.com/react-redux-tutorial/learn/v4/t/lecture/4962610?start=0
