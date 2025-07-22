import axios, { AxiosResponse } from "axios";
import { IActivityResponseInterface } from "../interfaces/ActivityResponseInterface";
import { ICreateAcitivityInterface } from "../interfaces/CreateActivityInterface";
import axiosApi from "@/app/lib/AxiosConfig";




export async function createActivity(request:ICreateAcitivityInterface):Promise<AxiosResponse<IActivityResponseInterface>>{
    try{
        const response = await axiosApi.post("/activity",request);
        return response;
    }catch(error:unknown){

        if(axios.isAxiosError(error) && error.response){
            const errorRes = error.response as AxiosResponse<IActivityResponseInterface>;
            return errorRes;
        }
        throw new Error("Network Error");
    }
}


export async function getActivitiesById(userId:string):Promise<AxiosResponse<IActivityResponseInterface>>{
    try{
        const response = await axiosApi.get(`/activity/${userId}`);
        return response;
    }catch(error:unknown){

        if(axios.isAxiosError(error) && error.response){
            const errorResponse = error.response as AxiosResponse<IActivityResponseInterface>;
            return errorResponse;
        }
        throw new Error("Network Error");
    }
}