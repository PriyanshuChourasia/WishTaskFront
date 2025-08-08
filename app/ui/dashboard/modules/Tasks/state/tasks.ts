import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskResponseInitialstate } from "../initialstate/TaskResponseInitialstate";
import { ITaskDetailResponse } from "../interfaces/TaskResponse";


interface ITask{
    taskData: ITaskDetailResponse
}


const taskInitialState: ITask = {
    taskData: TaskResponseInitialstate
}



export const TaskSlice = createSlice({
    name:"taskSlice",
    initialState: taskInitialState,
    reducers:{
        setTaskData:(state,action:PayloadAction<ITaskDetailResponse>)=>{
            state.taskData = action.payload;
        },
    }
});


export const {setTaskData} = TaskSlice.actions;
export default TaskSlice.reducer;