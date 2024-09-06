import {ADD_SEARCH} from '../actions/actions'

const initialState = {
    searched: ''
}

const searchReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_SEARCH:
            return {
                ...state,
                searched: action.payload
            }
        default:
            return state
    }

}

export default searchReducer