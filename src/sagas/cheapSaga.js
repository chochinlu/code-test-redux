import { put, call } from 'redux-saga/effects';
import { getCheapFlight } from '../api';
import {
  getCheapSuccessAction,
  getCheapErrorAction
} from '../actions/cheapActions';

export function* getCheapSaga(action) {
  try {
    const { data } = yield call(getCheapFlight);
    yield put(getCheapSuccessAction(data));
  } catch (error) {
    yield put(getCheapErrorAction(error.message));
  }
}
