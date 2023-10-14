import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";


const persistConfig = {
   key: 'root',
   version: 1,
   storage
}

const reducer = combineReducers({
   cart: cartSlice
   
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
   // all reducers are stored here.It must have any property name of your choice
   reducer: persistedReducer
})

export default store;
