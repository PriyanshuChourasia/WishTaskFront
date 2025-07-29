import { ISuccessWithError } from "@/app/ui/shared/Interfaces/SuccessInterface"
import { IWorkSpaceInterface } from "./CreateWorkspaceInterface"



export interface IWorkspaceResponseInterface extends ISuccessWithError{
    data:{
        result: IWorkSpaceInterface[]
    }
}




export interface IWorkspaceDetailResponse extends ISuccessWithError{
    data:{
        result:{
            id:string,
            name:string,
            noOfProjects: number,
            viewMode: string,
            shared: boolean,
            createdBy:string,
            createdAt:string
        }
    }
}