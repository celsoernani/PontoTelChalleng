import {all} from 'redux-saga/effects';
import launches from './launches/sagas';

export default function* rootSaga() {
  return yield all([launches]);
}
