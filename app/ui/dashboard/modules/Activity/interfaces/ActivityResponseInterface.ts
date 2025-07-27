import { ISuccessWithError } from "@/app/ui/shared/Interfaces/SuccessInterface";
import { ActivityStatus } from "./CreateActivityInterface";


export interface ActivityResponse{
    id:string;
    name:string;
    topic:string;
    description:string;
    status:ActivityStatus;
    startTime?:string;
    endTime?:string;
    createdAt:string;
}



export interface IActivityResponseInterface extends ISuccessWithError{
    data:{
        result:ActivityResponse[]
    }
}