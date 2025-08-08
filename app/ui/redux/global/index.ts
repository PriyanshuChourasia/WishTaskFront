import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserDetailInterface } from "../../shared/Interfaces/UserDetailInterface";
import { UserDetailInitialState } from "../../shared/intialstate/UserDetailInitialState";
import { IAllUserDetailsInterface } from "../../shared/Interfaces/AllUserInterface";
import { UserAllDetailInitialState } from "../../shared/intialstate/UserAllDetailInitialState";


export interface initialStateType{
    isSidebarCollapsed:boolean;
    isDarkMode:boolean;
    userDetails:IUserDetailInterface,
    allUserDetails: IAllUserDetailsInterface
}

export const initialState:initialStateType={
    isSidebarCollapsed: false,
    isDarkMode: false,
    userDetails: UserDetailInitialState,
    allUserDetails: UserAllDetailInitialState
}


export const globalSlice = createSlice({
    name:"global",
    initialState,
    reducers:{
        setIsSidebarCollapsed:(state,action:PayloadAction<boolean>)=>{
            state.isSidebarCollapsed = action.payload;
        },
        setIsDarkMode:(state,action:PayloadAction<boolean>)=>{
            state.isDarkMode = action.payload;
        },
        setUserDetails:(state,action:PayloadAction<IUserDetailInterface>)=>{
            state.userDetails = action.payload;
        },
        setAllUserDetails:(state,action: PayloadAction<IAllUserDetailsInterface>)=>{
            state.allUserDetails = action.payload;
        }
    }
});

export const {setIsDarkMode,setIsSidebarCollapsed,setUserDetails,setAllUserDetails} = globalSlice.actions;
export default globalSlice.reducer;