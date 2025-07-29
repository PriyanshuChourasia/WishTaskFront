import axios, { AxiosResponse } from "axios";
import { IProjectResponse, IWrokspaceProjectResponse } from "../interfaces/ProjectResponse";
import { ICreateProjectInterface } from "../interfaces/CreateProjectInterface";
import axiosApi from "@/app/lib/AxiosConfig";




export async function createProject(request:ICreateProjectInterface):Promise<AxiosResponse<IProjectResponse>>{
    try{
        const response = await axiosApi.post('/projects',request);
        return response;
    }catch(error:unknown){
        if(axios.isAxiosError(error) && error.response){
            return error.response as AxiosResponse<IProjectResponse>;
        }
        throw new Error("Project not created");
    }
}



export async function getProjectByWorkspaceId(workspaceId:string):Promise<AxiosResponse<IWrokspaceProjectResponse>>{
    try{
        const response = await axiosApi.get(`/projects/${workspaceId}`);
        return response;
    }catch(error:unknown){
        if(axios.isAxiosError(error) && error.response){
            return error.response as AxiosResponse<IWrokspaceProjectResponse>;
        }
        throw new Error("Projects not found");
    }
}