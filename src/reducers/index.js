import {
  FETCHING_ACTIVITY_START,
  FETCHING_ACTIVITY_SUCCESS,
  FETCHING_ACTIVITY_FAILURE
} from '../actions';

const initialState = {
  currency: [],
  isFetching: false,
  error: ''
};

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_ACTIVITY_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case FETCHING_ACTIVITY_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        currency: action.payload
      }
    case FETCHING_ACTIVITY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default: 
      return state;
  }
};