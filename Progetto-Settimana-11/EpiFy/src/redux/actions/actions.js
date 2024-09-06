export const ADD_SONG = 'ADD_SONG'
export const STOP_SONG = 'STOP_SONG'
export const PLAY_SONG = 'PLAY_SONG'
export const ADD_TO_FAV = 'ADD_TO_FAV'
export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV'
export const ADD_SEARCH = 'ADD_SEARCH'

export const AddSongAction = (song) => {
     return {
        type: ADD_SONG,
        payload: song
    }
}

export const StopSongAction = () => {
    return {
        type: STOP_SONG,
    }
}
export const PlaySongAction = () => {
    return {
        type: PLAY_SONG
    }
}
export const AddToFavAction = (song) => {
    return {
        type: ADD_TO_FAV,
        payload: song
    }
}
export const RemoveFromFavAction = (song) => {
    return {
        type: REMOVE_FROM_FAV,
        payload: song
    }
}
export const AddSearchAction = (search) => {
    return {
        type: ADD_SEARCH,
        payload: search
    }
}