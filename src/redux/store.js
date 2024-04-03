import { configureStore} from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { combineReducers } from '@reduxjs/toolkit' 
import adminSlice from './adminSlice'
const rootReducer=combineReducers({
 adminSlice
})


const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store=configureStore({
    reducer:persistedReducer
})
export let persistor = persistStore(store)


