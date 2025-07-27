import { combineReducers } from "@reduxjs/toolkit";
import {api} from "./state/api";
import globalReducer from "./global/index";
import workspaceReducer from "../../ui/dashboard/modules/Workspaces/state/index";


const rootReducer = combineReducers({
    global: globalReducer,
    workspaceData: workspaceReducer,
    [api.reducerPath]: api.reducer,
});

export default rootReducer;