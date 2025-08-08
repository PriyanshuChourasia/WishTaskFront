import { ITaskDetailResponse } from "../interfaces/TaskResponse";




export const TaskResponseInitialstate: ITaskDetailResponse={
    data: {
        result: []
    },
    success: false,
    errors: {
        message: ""
    }
}