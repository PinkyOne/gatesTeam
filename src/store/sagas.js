import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';

import actions from './actions';
import { PERIODS } from './reducer';
import { normalizeResponse } from './utils';

function* fetchData(action) {
  try {
    yield put(actions.setFetching(true));
    yield put(actions.changePeriod(action.payload.periodIndex));

    const period = PERIODS[action.payload.periodIndex];

    const { data } = yield call(axios.get, `http://localhost:8080/${period}`);
    yield put(actions.fetchDataSucceeded(normalizeResponse(data, period)));
  } catch (e) {
    yield put(actions.fetchDataFailted({ message: e.message }));
  } finally {
    yield put(actions.setFetching(false));
  }
}

function* rootSaga() {
  yield takeLatest(actions.DATA_FETCH_REQUESTED, fetchData);
}

export default rootSaga;
