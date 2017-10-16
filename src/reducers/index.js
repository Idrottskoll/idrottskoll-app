import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// obj shall be form: form
const rootReducer = combineReducers({
    form,
});

export default rootReducer;
