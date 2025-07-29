import { ISuccessWithError } from "@/app/ui/shared/Interfaces/SuccessInterface";

export interface IProject{
    name:string,
    topic:string,
    description:string,
    startDate:string,
    dueDate:string
    workspaceId:string,
    createdAt:string
}



export interface IProjectResponse extends ISuccessWithError{
    data:{
        result:IProject
    }
}


export interface IWrokspaceProjectResponse extends ISuccessWithError{
    data:{
        result: IProject[]
    }
}