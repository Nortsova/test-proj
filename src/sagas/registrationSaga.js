import { takeEvery, put, call } from 'redux-saga/effects';
import { registration as registrationApi } from '../api/registration';
import { SUBMIT_REGISTRATION } from '../const';
import { userLogged } from '../actions';

function* registrationSaga({ payload: { email, password } }) {
  try {
    const data = yield call(registrationApi, { email, password });
    yield put(userLogged(data));
  } catch (e){ 
    console.log(e);
    alert('error');
  }
}
export default function* todosSaga() {
  yield [
    takeEvery(SUBMIT_REGISTRATION, registrationSaga),
  ];
}

