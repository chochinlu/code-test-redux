import { takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes';
import { getCheapSaga } from './cheapSaga';
import { getBusinesspSaga } from './businessSaga';

export function* watchGetCheap() {
  yield takeLatest(types.GET_CHEAP, getCheapSaga);
}

export function* watchGetBusiness() {
  yield takeLatest(types.GET_BUSINESS, getBusinesspSaga);
}
