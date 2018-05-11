import axios from 'axios';
import { FETCH_USER, CURRENT_VALUE } from './types';

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/user');
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const currentValue = value => async (dispatch) => {
    dispatch({ type: CURRENT_VALUE, payload: value });
}