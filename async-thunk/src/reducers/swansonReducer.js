import { FETCHING_FAILURE, FETCHING_START, FETCHING_SUCCESS } from '../actions/swansonActions'

const initialState = {
    swansonism: {},
    error: '',
    loading: false,
}

export const swansonReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_START:
            return {...state, loading: true }
        case FETCHING_SUCCESS:
            return {...state, loading: false, swansonism: action.payload }
        case FETCHING_FAILURE:
            return {...state, loading: false, error: action.payload }
        default:
            return state;

    }
}