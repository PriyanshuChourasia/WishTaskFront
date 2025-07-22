import axios, { AxiosResponse } from "axios";
import { IUserDetailInterface } from "../../Interfaces/UserDetailInterface";
import axiosApi from "@/app/lib/AxiosConfig";



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