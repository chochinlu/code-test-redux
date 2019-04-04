import { takeLatest, takeEvery } from 'redux-saga/effects';
import * as types from '../actionTypes';
import { getCheapSaga } from './cheapSaga';

export function* watchGetCheap() {
  yield takeLatest(types.GET_CHEAP, getCheapSaga);
}
