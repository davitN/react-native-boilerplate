import {all, takeLatest} from 'redux-saga/effects';
import {SET_DEVICE_TOKEN} from '../ducks/mainDuck';
import {checkSignedInSaga, setDeviceTokenSaga} from './mainSaga';
import {logoutSaga, signInSaga, signUpSaga} from './authSaga';
import {
  CHECK_SIGNED_IN,
  LOGOUT,
  REQUEST_SIGN_IN,
  REQUEST_SIGN_UP,
} from '../ducks/authDuck';
import {GET_CARDS} from '../ducks/ethosDuck';
import {getCardsSaga} from './ethosSaga';

function* actionWatcher() {
  yield takeLatest(CHECK_SIGNED_IN, checkSignedInSaga);
  yield takeLatest(SET_DEVICE_TOKEN, setDeviceTokenSaga);
  yield takeLatest(REQUEST_SIGN_IN, signInSaga);
  yield takeLatest(REQUEST_SIGN_UP, signUpSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(GET_CARDS, getCardsSaga);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
