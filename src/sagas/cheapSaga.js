import { put, call } from 'redux-saga/effects';
import { getCheapFlight } from '../api';
import {
  getCheapLoadingAction,
  getCheapSuccessAction,
  getCheapErrorAction
} from '../actions/cheapActions';

export function* getCheapSaga(action) {
  try {
    yield put(getCheapLoadingAction(true));
    const { data } = yield call(getCheapFlight);
    yield put(getCheapSuccessAction(data));
  } catch (error) {
    yield put(getCheapErrorAction(error.message));
  } finally {
    yield put(getCheapLoadingAction(false));
  }
}
