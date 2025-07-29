import { IWorkspaceDetailResponse } from "../interfaces/WorkspaceResponseInterface";


export const WorkspaceDetail = {
    id: "",
    name: "",
    noOfProjects: 0,
    viewMode: "",
    shared: false,
    createdBy: "",
    createdAt: ""
}


export const WorkspaceDetailInitialstate:IWorkspaceDetailResponse={
    data: {
        result: {
            id: "",
            name: "",
            noOfProjects: 0,
            viewMode: "",
            shared: false,
            createdBy: "",
            createdAt: ""
        }
    },
    success: false,
    errors: {
        message: ""
    }
}