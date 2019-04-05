import { fork, all } from 'redux-saga/effects';
import { watchGetCheap, watchGetBusiness } from './watcher';

export default function* startForman() {
  yield all([fork(watchGetCheap)]);
  yield all([fork(watchGetBusiness)]);
}
