import { ISuccessWithError } from "../../shared/Interfaces/SuccessInterface";



export interface IRegisterInterface{
    name:string;
    email:string;
    password:string;
}


export interface IRegisterResponse{
    id:string,
    name:string,
    email:string
}


export interface IRegisterResponseDetail extends ISuccessWithError{
    data:{
        result: IRegisterResponse
    }
}