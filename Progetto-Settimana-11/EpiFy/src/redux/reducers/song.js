import {ADD_SONG, STOP_SONG, PLAY_SONG} from '../actions/actions'

const initialState = {
    song: null,
    isPlaying: false,
};

const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SONG:
            return {
                ...state,
                song: action.payload,
                isPlaying: true,
            };
        case STOP_SONG:
            return {
                ...state,
                isPlaying: false,
            };
        case PLAY_SONG:
            return {
                ...state,
                isPlaying: true,
            };
        default:
            return state;
    }
};

export default songReducer
