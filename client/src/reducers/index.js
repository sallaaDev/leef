import { combineReducers } from 'redux';
import authReducer from './authReducer';
import currentValue from './currentValue';

export default combineReducers({
    auth: authReducer,
    value: currentValue
});