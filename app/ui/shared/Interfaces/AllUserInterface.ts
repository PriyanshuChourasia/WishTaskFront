import { ISuccessWithError } from "./SuccessInterface"



export interface IAllUserInterface{
    id: string,
    name: string,
    email:string,
    userType: {
        name: string,
        level: number
    }
}


export interface IAllUserDetailsInterface extends ISuccessWithError{
    data:{
        result: IAllUserInterface[]
    }
}