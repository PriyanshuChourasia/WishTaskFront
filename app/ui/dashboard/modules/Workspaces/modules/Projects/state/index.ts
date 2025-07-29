import { createSlice, PayloadAction } from "@reduxjs/toolkit"




interface ProjectReduxInterface{
    workspaceId:string
}

const projectReduxInitialState:ProjectReduxInterface={
    workspaceId:""
}

export const ProjectSlice = createSlice({
    name:"Projects",
    initialState: projectReduxInitialState,
    reducers:{
        setWorkspaceId:(state,action:PayloadAction<string>)=>{
            state.workspaceId = action.payload;
        }
    }
});

export const {setWorkspaceId} = ProjectSlice.actions;
export default ProjectSlice.reducer;