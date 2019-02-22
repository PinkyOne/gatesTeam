import actions from './actions';

export const PERIODS = ['last_hour', 'today', 'yesterday', 'last_3days'];

export default (state = { periodIndex: 0 }, action) => {
  switch (action.type) {
    case actions.CHANGE_PERIOD:
      return {
        periodIndex: action.payload.periodIndex,
      };
    case actions.DATA_FETCH_SUCCEEDED:
      return {
        ...state,
        data: action.payload.data,
        errors: action.payload.errors,
      };
    case actions.DATA_FETCH_FAILED:
      return {
        ...state,
        apiError: action.payload,
      };
    default:
      return state;
  }
};
