import { ISuccessWithError } from "@/app/ui/shared/Interfaces/SuccessInterface";



export interface IUpdateWorkspace{
    id:string;
    viewMode: string
}


export interface IUpdateWorkspaceResponse extends ISuccessWithError{
    data:{
        result:{
            message:string
        }
    },
}