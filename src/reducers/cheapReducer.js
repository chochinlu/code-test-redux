import initialState from './initialState';
import * as types from '../actionTypes';
import { reformatCheap } from '../utils/reformat';

export default function(cheap = initialState.cheap, action) {
  switch (action.type) {
    case types.GET_CHEAP_LOADING:
      return { ...cheap, loading: action.loading };
    case types.GET_CHEAP_SUCCESS:
      return { ...cheap, flight: action.payload.map(p => reformatCheap(p)) };
    case types.GET_CHEAP_ERROR:
      return { ...cheap, error: action.error };
    default:
      return cheap;
  }
}
