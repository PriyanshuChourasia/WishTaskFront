import axiosApi from "@/app/lib/AxiosConfig";
import axios, { AxiosResponse } from "axios";
import { ILoginResponse } from "../interfaces/LoginResponse";
import { ILoginRequest } from "../interfaces/LoginRequest";





export async function loginUser(request:ILoginRequest):Promise<AxiosResponse<ILoginResponse>>{
    try{
        const response = await axiosApi.post("/auth/signin",request);
        return response;
    }catch(error:unknown){
        if(axios.isAxiosError(error)){
            throw new Error("User not found")
        }else{
            throw new Error("Unexpected error");
        }
    }
}