import { combineReducers } from "@reduxjs/toolkit";
import {api} from "./state/api";
import globalReducer from "./global/index";


const rootReducer = combineReducers({
    global: globalReducer,
    [api.reducerPath]: api.reducer,
});

export default rootReducer;