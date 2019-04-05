import * as types from '../actionTypes';

export const getBusinessAction = () => ({
  type: types.GET_BUSINESS
});

export const getBusinessLoadingAction = loading => ({
  type: types.GET_BUSINESS_LOADING,
  loading
});

export const getBusinessSuccessAction = payload => ({
  type: types.GET_BUSINESS_SUCCESS,
  payload
});

export const getBusinessErrorAction = error => ({
  type: types.GET_BUSINESS_ERROR,
  error
});

export const addBusinessFlightAction = flight => ({
  type: types.ADD_BUSINESS_FLIGHT,
  flight
});
