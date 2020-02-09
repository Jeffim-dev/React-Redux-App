import axios from 'axios';

export const FETCHING_ACTIVITY_START = "FETCHING_ACTIVITY_START";
export const FETCHING_ACTIVITY_SUCCESS = "FETCHING_ACTIVITY_SUCCESS";
export const FETCHING_ACTIVITY_FAILURE = "FETCHING_ACTIVITY_FAILURE";

export const fetchActivity = () => dispatch => {
  dispatch({ type: FETCHING_ACTIVITY_START });
  axios
      .get("https://api.exchangerate-api.com/v4/latest/USD")
      .then(res => {
        console.log(res);
        dispatch({ type: FETCHING_ACTIVITY_SUCCESS, payload: res.data.rates });
      })
      .catch(err => console.log(err));
       dispatch( { type: FETCHING_ACTIVITY_FAILURE, payload: "Error getting rates" })
}