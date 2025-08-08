import axios, { AxiosResponse } from "axios";
import { IUserDetailInterface } from "../../Interfaces/UserDetailInterface";
import axiosApi from "@/app/lib/AxiosConfig";
import { IAllUserDetailsInterface } from "../../Interfaces/AllUserInterface";


// Get user details
export async function getUserDetails():Promise<AxiosResponse<IUserDetailInterface>>{
    try{
        const response = await axiosApi.get('/user/details');
        return response;
    }catch(error:unknown){
        if(axios.isAxiosError(error) && error.response){
            throw new Error("New Error");
        }
        throw new Error("Error");
    }
}


// Get All users
export async function getAllUsers():Promise<AxiosResponse<IAllUserDetailsInterface>>{
    try{
        const response = await axiosApi.get("/user/all");
        return response;
    }catch(error:unknown){
        if(axios.isAxiosError(error) && error.response){
            return error.response as AxiosResponse<IAllUserDetailsInterface>;
        }
        throw new Error("No users found");
    }
}