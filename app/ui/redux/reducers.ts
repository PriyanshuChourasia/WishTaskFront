import { combineReducers } from "@reduxjs/toolkit";
import {api} from "./state/api";
import globalReducer from "./global/index";
import workspaceReducer from "../../ui/dashboard/modules/Workspaces/state/index";
import projectReducer from "../../ui/dashboard/modules/Workspaces/modules/Projects/state/index";
import taskReducer from "@/app/ui/dashboard/modules/Tasks/state/tasks";


const rootReducer = combineReducers({
    global: globalReducer,
    workspaceData: workspaceReducer,
    projectData: projectReducer,
    taskResponseData: taskReducer,
    [api.reducerPath]: api.reducer,
});

export default rootReducer;