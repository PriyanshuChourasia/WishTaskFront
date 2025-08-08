import { ISuccessWithError } from "@/app/ui/shared/Interfaces/SuccessInterface";

export interface IReferenceUser{
    id: string,
    name: string
}

export interface ITaskResponse{
    id: string,
    name: string,
    description: string,
    createdBy: IReferenceUser,
    assignedBy: IReferenceUser,
    assignedTo: IReferenceUser,
    assignedDate: string,
    startDate: string,
    tentativeDate: string,
    status: string,
    priority:string,
    createdAt: string,
    updatedAt: string
}



export interface ITaskDetailResponse extends ISuccessWithError{
    data:{
        result: ITaskResponse[]
    }
}