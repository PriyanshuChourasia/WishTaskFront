import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {persistReducer,FLUSH,REGISTER,REHYDRATE,PAUSE,PERSIST,PURGE} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import rootReducer from "./reducers";
import { api } from "./state/api";



const createNoopStorage = () => ({
    getItem(_key:unknown){
        return Promise.resolve(null);
    },
    setItem(_key:unknown,value:string | number | unknown){
        return Promise.resolve(value);
    },
    removeItem(_key:unknown,_value:unknown){
        return Promise.resolve();
    }
});

const storage = typeof window === "undefined" ? createNoopStorage() : createWebStorage('local');

const persistConfig = {
    key: "root",
    storage,
    whitelist:['global']
};

const persistedReducer = persistReducer(persistConfig,rootReducer);


export const makeStore = () => configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
        }
    }).concat(api.middleware)
});

// Redux global hooks and types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> =  useSelector;