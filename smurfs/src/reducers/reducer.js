import {
  FETCH_DATA,
  FETCH_SUCCESS,
  FETCH_ERROR,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_ERROR,
} from "../actions/action";

const initialState = {
  data: [],
  isFetching: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        data: [],
        isFetching: false,
        error: action.payload,
      };
    case ADD_SMURF:
      return {
        ...state,
        isFetching: true,
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case ADD_SMURF_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
