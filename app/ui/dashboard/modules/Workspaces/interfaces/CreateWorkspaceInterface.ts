import { ISuccessWithError } from "@/app/ui/shared/Interfaces/SuccessInterface";


export enum ViewModeStatus{
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}



export interface IWorkSpaceInterface{
    id: string,
    name: string,
    viewMode: string,
    shared: boolean,
    createdBy: string,
    createdAt?:string
}


export interface ICreateWorkspaceResponse extends ISuccessWithError{
    data:{
        result: IWorkSpaceInterface
    }
}
