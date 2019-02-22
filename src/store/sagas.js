import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';

import actions from './actions';
import { PERIODS } from './reducer';

function* fetchData(action) {
  try {
    yield put(actions.changePeriod(action.payload.periodIndex));
    const data = yield call(axios.get, `http://localhost:8080/${PERIODS[action.payload.periodIndex]}`);
    yield put(actions.fetchDataSucceeded(data));
  } catch (e) {
    yield put(actions.fetchDataSucceeded({ message: e.message }));
  }
}

function* rootSaga() {
  yield takeLatest(actions.DATA_FETCH_REQUESTED, fetchData);
}

export default rootSaga;
