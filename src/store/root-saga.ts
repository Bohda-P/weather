import { fork } from 'redux-saga/effects';
// Sagas
import { weatherSaga } from './weather/saga';

export default function* rootSaga() {
  yield fork(weatherSaga);
}
