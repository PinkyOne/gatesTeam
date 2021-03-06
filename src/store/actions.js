export const actions = {
  DATA_FETCH_REQUESTED: 'DATA_FETCH_REQUESTED',
  DATA_FETCH_SUCCEEDED: 'DATA_FETCH_SUCCEEDED',
  DATA_FETCH_FAILED: 'DATA_FETCH_FAILED',
  fetchData: periodIndex => ({
    type: actions.DATA_FETCH_REQUESTED,
    payload: { periodIndex },
  }),
  fetchDataSucceeded: response => ({
    type: actions.DATA_FETCH_SUCCEEDED,
    payload: { ...response },
  }),
  fetchDataFailed: response => ({
    type: actions.DATA_FETCH_FAILED,
    payload: { ...response },
  }),

  CHANGE_PERIOD: 'CHANGE_PERIOD',
  changePeriod: periodIndex => ({
    type: actions.CHANGE_PERIOD,
    payload: { periodIndex },
  }),
  SET_FETCHING: 'SET_FETCHING',
  setFetching: value => ({
    type: actions.SET_FETCHING,
    payload: value,
  }),
};

export default actions;
