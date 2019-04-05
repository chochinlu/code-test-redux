import initialState from './initialState';
import * as types from '../actionTypes';
import { reformatBusiness } from '../utils/reformat';

export default function(business = initialState.business, action) {
  switch (action.type) {
    case types.GET_BUSINESS_LOADING:
      return { ...business, loading: action.loading };
    case types.GET_BUSINESS_SUCCESS:
      return {
        ...business,
        flight: action.payload.map(p => reformatBusiness(p))
      };
    case types.GET_BUSINESS_ERROR:
      return { ...business, error: action.error };
    case types.ADD_BUSINESS_FLIGHT:
      return { ...business, flight: [action.flight, ...business.flight] };
    default:
      return business;
  }
}
