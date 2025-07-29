import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWorkspaceResponseInterface } from '../interfaces/WorkspaceResponseInterface';
import { WorkspaceResponseInitialState } from "../initialstate/WorkspaceInitialState";


export const WorkspaceSlice = createSlice({
    name:"Workspace",
    initialState: WorkspaceResponseInitialState,
    reducers:{
        setWorkspaces:(state,action:PayloadAction<IWorkspaceResponseInterface>)=>{
            state.data = action.payload.data;
        }
    }
});


export const {setWorkspaces} = WorkspaceSlice.actions;
export default WorkspaceSlice.reducer;