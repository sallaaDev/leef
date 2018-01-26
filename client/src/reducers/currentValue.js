import { CURRENT_VALUE } from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
      case CURRENT_VALUE:
        return action.payload || false;
      default:
        return state;
    }
  }