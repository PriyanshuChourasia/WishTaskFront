import { ISuccessWithError } from "@/app/ui/shared/Interfaces/SuccessInterface"
import { IWorkSpaceInterface } from "./CreateWorkspaceInterface"



export interface IWorkspaceResponseInterface extends ISuccessWithError{
    data:{
        results: IWorkSpaceInterface[]
    }
}
