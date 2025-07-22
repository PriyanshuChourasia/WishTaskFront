import { ISuccessWithError } from "./SuccessInterface"

export interface UserDetail{
    id: string,
    name: string,
    email: string,
    userType: {
        name: string,
        level: number
    }
}

export interface IUserDetailInterface extends ISuccessWithError{
    data:UserDetail
}