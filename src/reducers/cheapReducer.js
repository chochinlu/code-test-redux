import initialState from './initialState';
import * as types from '../actionTypes';

export default function(cheap = initialState.cheap, action) {
  switch (action.type) {
    case types.GET_CHEAP_SUCCESS:
      return { ...cheap, flight: action.payload };
    case types.GET_CHEAP_ERROR:
      return { ...cheap, error: action.error };
    default:
      return cheap;
  }
}
