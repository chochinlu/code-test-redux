import * as types from '../actionTypes';

export const getCheapAction = () => ({
  type: types.GET_CHEAP
});

export const getCheapSuccessAction = payload => ({
  type: types.GET_CHEAP_SUCCESS,
  payload
});

export const getCheapErrorAction = error => ({
  type: types.GET_CHEAP_ERROR,
  error
});
