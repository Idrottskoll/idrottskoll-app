import { createStore } from 'redux';
import app from './src/reducers';

export default function configureStore() {
    let store = createStore(app);
    return store;
}
