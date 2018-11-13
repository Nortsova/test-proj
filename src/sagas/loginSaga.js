import { takeEvery, put, call } from 'redux-saga/effects';
import { login as loginApi } from '../api/login';
import { SUBMIT_LOGIN } from '../const';
import { userLogged } from '../actions';

function* loginSubmitSaga({ payload: { email, password } }) {
  try {
    const data = yield call(loginApi, { email, password });
    yield put(userLogged(data));
  } catch (e){ 
    console.log(e);
    alert('error');
  }
}
export default function* todosSaga() {
  yield [
    takeEvery(SUBMIT_LOGIN, loginSubmitSaga),
  ];
}

