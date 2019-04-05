import * as types from '../actionTypes';

export const getCheapAction = () => ({
  type: types.GET_CHEAP
});

export const getCheapLoadingAction = loading => ({
  type: types.GET_CHEAP_LOADING,
  loading
});

export const getCheapSuccessAction = payload => ({
  type: types.GET_CHEAP_SUCCESS,
  payload
});

export const getCheapErrorAction = error => ({
  type: types.GET_CHEAP_ERROR,
  error
});

export const addCheapFlightAction = flight => ({
  type: types.ADD_CHEAP_FLIGHT,
  flight
});
