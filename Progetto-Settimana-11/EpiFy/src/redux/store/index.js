import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import songReducer from '../reducers/song'
import favReducer from '../reducers/favourite'
import searchReducer from '../reducers/search'


const persistConfig = {
    key: 'root',
    storage
}

const mainReducer = combineReducers({
    song: songReducer,
    favourite: favReducer,
    search: searchReducer
})

const persistedReducer = persistReducer(persistConfig, mainReducer)

export const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                serializableCheck: false
            })
        }
    })
    export const persistor = persistStore(store)