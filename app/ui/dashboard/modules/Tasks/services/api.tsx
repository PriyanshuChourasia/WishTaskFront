import axios, { AxiosResponse } from "axios";
import { ITaskDetailResponse } from "../interfaces/TaskResponse";
import axiosApi from "@/app/lib/AxiosConfig";
import { ITaskCreateResponse, ITaskRequestInterface } from "../interfaces/TaskCreateRequest";



export async function getAllTasksById(userId:string):Promise<AxiosResponse<ITaskDetailResponse>>{
    try{
        const response = await axiosApi.get(`/tasks/all/${userId}`);
        return response;
    }catch(error:unknown){
        if(axios.isAxiosError(error) && error.response){
            return error.response as AxiosResponse<ITaskDetailResponse>;
        }
        throw new Error("Axios Error");
    }
}


export async function createTasks(request:ITaskRequestInterface):Promise<AxiosResponse<ITaskCreateResponse>>{
    try{
        const response = await axiosApi.post('/tasks',request);
        return response;
    }catch(error:unknown){
        if(axios.isAxiosError(error) && error.response){
            return error.response as AxiosResponse<ITaskCreateResponse>;
        }
        throw new Error("Axios Error");
    }
}