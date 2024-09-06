import { REMOVE_FROM_FAV, ADD_TO_FAV } from '../actions/actions'

const initialState = {
    list: []
}

const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAV:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case REMOVE_FROM_FAV:
            return {
                ...state,
                list: state.list.filter((fav) => fav.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default favReducer