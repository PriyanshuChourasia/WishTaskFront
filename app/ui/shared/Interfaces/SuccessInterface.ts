

export interface ISuccessInterface{
    success:boolean
}


export interface ISuccessWithError{
    success:boolean;
    errors:{
        message:string;
    }
}