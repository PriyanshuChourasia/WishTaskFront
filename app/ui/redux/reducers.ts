import { combineReducers } from "@reduxjs/toolkit";
import {api} from "./state/api";
import globalReducer from "./global/index";
import workspaceReducer from "../../ui/dashboard/modules/Workspaces/state/index";
import projectReducer from "../../ui/dashboard/modules/Workspaces/modules/Projects/state/index";


const rootReducer = combineReducers({
    global: globalReducer,
    workspaceData: workspaceReducer,
    projectData: projectReducer,
    [api.reducerPath]: api.reducer,
});

export default rootReducer;