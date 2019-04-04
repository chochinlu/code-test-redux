import { fork, all } from 'redux-saga/effects';
import { watchGetCheap } from './watcher';

export default function* startForman() {
  yield all([fork(watchGetCheap)]);
}
