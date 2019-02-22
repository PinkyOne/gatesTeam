import {
  call, put, takeLatest,
} from 'redux-saga/effects';

import axios from 'axios';

function* fetchData(action) {
  try {
    const data = yield call(axios.get, `https://localhost:8080/${action.payload.period}`);
    yield put({ type: 'DATA_FETCH_SUCCEEDED', data });
  } catch (e) {
    yield put({ type: 'DATA_FETCH_FAILED', message: e.message });
  }
}

function* rootSaga() {
  yield takeLatest('DATA_FETCH_REQUESTED', fetchData);
}

export default rootSaga;
