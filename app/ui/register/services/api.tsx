import axios, { AxiosResponse } from "axios";
import { IRegisterInterface, IRegisterResponseDetail } from "../interface/RegisterInterface";
import axiosApi from "@/app/lib/AxiosConfig";





export async function registerUser(request:IRegisterInterface):Promise<AxiosResponse<IRegisterResponseDetail>>{
    try{
        const response = await axiosApi.post('/user/create',request);
        return response;
    }catch(error:unknown){
        if(axios.isAxiosError(error) && error.response){
            return error.response as AxiosResponse<IRegisterResponseDetail>;
        }
        throw new Error("User not registered");
    }   
}