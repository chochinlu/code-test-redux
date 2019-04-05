import { put, call } from 'redux-saga/effects';
import { getBusinessFlight } from '../api';
import {
  getBusinessLoadingAction,
  getBusinessSuccessAction,
  getBusinessErrorAction
} from '../actions/businessActions';

export function* getBusinesspSaga(action) {
  try {
    yield put(getBusinessLoadingAction(true));
    const { data } = yield call(getBusinessFlight);
    yield put(getBusinessSuccessAction(data));
  } catch (error) {
    yield put(getBusinessErrorAction(error.message));
  } finally {
    yield put(getBusinessLoadingAction(false));
  }
}
