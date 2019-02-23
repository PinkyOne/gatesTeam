import actions from './actions';

export const PERIODS = ['last_hour', 'today', 'yesterday', 'last_3days'];

const defaultState = {
  periodIndex: 0, isFetching: false, errors: [], data: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.CHANGE_PERIOD:
      return {
        ...state,
        periodIndex: action.payload.periodIndex,
      };
    case actions.DATA_FETCH_SUCCEEDED:
      return {
        ...state,
        data: action.payload.data,
        errors: action.payload.errors,
        apiError: null,
      };
    case actions.DATA_FETCH_FAILED:
      return {
        ...state,
        apiError: action.payload,
      };
    case actions.SET_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    default:
      return state;
  }
};
