import { IWorkspaceResponseInterface } from "../interfaces/WorkspaceResponseInterface";




export const WorkspaceResponseInitialState:IWorkspaceResponseInterface={
    data: {
        result: []
    },
    success: false,
    errors: {
        message: ""
    }
}