import { createStore } from 'redux';
import app from './src/reducers';

export default function configureStore() {
    const store = createStore(app);
    return store;
}
