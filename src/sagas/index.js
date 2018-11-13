import { fork } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';

export default function* rootSaga() {
  yield [
    fork(loginSaga),
    fork(registrationSaga),
  ];
}
