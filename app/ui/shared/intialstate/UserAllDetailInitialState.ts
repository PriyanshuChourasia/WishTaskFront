import { IAllUserDetailsInterface } from "../Interfaces/AllUserInterface";





export const UserAllDetailInitialState: IAllUserDetailsInterface={
    data: {
        result: []
    },
    success: false,
    errors: {
        message: ""
    }
}