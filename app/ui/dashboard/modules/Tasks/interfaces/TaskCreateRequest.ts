import { ISuccessWithError } from "@/app/ui/shared/Interfaces/SuccessInterface";
import { ITaskResponse } from "./TaskResponse";



export interface ITaskRequestInterface{
    name: string,
    description: string,
    createdBy: string,
    assignedBy: string,
    assignedTo: string,
    assignedDate: string,
    startDate: string,
    tentativeDate: string,
    status: string,
    priority:string
}



export interface ITaskCreateResponse extends ISuccessWithError{
    data:{
        result: ITaskResponse
    }
}