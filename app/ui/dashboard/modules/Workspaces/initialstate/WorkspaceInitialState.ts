import { IWorkspaceResponseInterface } from "../interfaces/WorkspaceResponseInterface";




export const WorkspaceResponseInitialState:IWorkspaceResponseInterface={
    data: {
        results: []
    },
    success: false,
    errors: {
        message: ""
    }
}