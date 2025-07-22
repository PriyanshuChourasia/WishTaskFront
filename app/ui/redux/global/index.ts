import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserDetailInterface } from "../../shared/Interfaces/UserDetailInterface";
import { UserDetailInitialState } from "../../shared/intialstate/UserDetailInitialState";


export interface initialStateType{
    isSidebarCollapsed:boolean;
    isDarkMode:boolean;
    userDetails:IUserDetailInterface
}

export const initialState:initialStateType={
    isSidebarCollapsed: false,
    isDarkMode: false,
    userDetails: UserDetailInitialState
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
        }
    }
});

export const {setIsDarkMode,setIsSidebarCollapsed,setUserDetails} = globalSlice.actions;
export default globalSlice.reducer;