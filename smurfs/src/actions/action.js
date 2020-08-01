import axios from "axios";

export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";

export const fetchData = () => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_ERROR,
        payload: res.data,
      });
    });
};

export const addSmurf = (newSmurf) => (dispatch) => {
  console.log(newSmurf);
  dispatch({ type: ADD_SMURF });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((res) => {
      console.log(res);
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: ADD_SMURF_ERROR,
        payload: err,
      });
    });
};
