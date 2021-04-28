import axios from 'axios';

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS"
export const FETCHING_FAILURE = "FETCHING_FAILURE"

export const fetchSwanson = () => (dispatch) => {
    dispatch({ type: FETCHING_START });
    axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')

    .then((res => {
        console.log("Swanson says: ", res.data[0])
        dispatch({ type: FETCHING_SUCCESS, payload: res.data[0] })
    }))

    .catch(err => {
        console.log(err)
        dispatch({ type: FETCHING_FAILURE, payload: err })
    })
};