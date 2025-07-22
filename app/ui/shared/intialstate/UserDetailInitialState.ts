import { IUserDetailInterface, UserDetail } from "../Interfaces/UserDetailInterface";


const UserDetailInitial:UserDetail={
    id: "",
    name: "",
    email: "",
    userType: {
        name: "",
        level: 0
    }
}


export const UserDetailInitialState:IUserDetailInterface={
    data: UserDetailInitial,
    success: false,
    errors: {
        message: ""
    }
}