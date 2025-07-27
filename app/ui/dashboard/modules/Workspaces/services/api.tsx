import axios, { AxiosResponse } from "axios";
import { IWorkspaceResponseInterface } from "../interfaces/WorkspaceResponseInterface";
import axiosApi from "@/app/lib/AxiosConfig";
import { ICreateWorkspaceResponse, IWorkSpaceInterface } from "../interfaces/CreateWorkspaceInterface";
import { IUpdateWorkspace, IUpdateWorkspaceResponse } from "../interfaces/UpdateWorkspaceInterface";





export async function getWorkSpaceByUserId(userId:string):Promise<AxiosResponse<IWorkspaceResponseInterface>>{
    try{
        const response = await axiosApi.get(`/workspace/${userId}`);
        return response;
    }catch(error:unknown){
        if(axios.isAxiosError(error) && error.response){
            return error.response as AxiosResponse<IWorkspaceResponseInterface>
        }
        throw new Error("Workspace not found");
    }
}

export async function createWorkspace(request:IWorkSpaceInterface):Promise<AxiosResponse<ICreateWorkspaceResponse>>{
    try{
        const response = await axiosApi.post(`/workspace`,request);
        return response;
    }catch(error:unknown){
        if(axios.isAxiosError(error) && error.response){
            return error.response as AxiosResponse<ICreateWorkspaceResponse>
        }
        throw new Error("Workspace not found");
    }
}

export async function updateWorkspace(request:IUpdateWorkspace):Promise<AxiosResponse<IUpdateWorkspaceResponse>>{
    try{
        const response = await axiosApi.patch(`/workspace/view-status/${request.id}`,{
            viewMode: request.viewMode
        });
        return response;
    }catch(error:unknown){
        if(axios.isAxiosError(error) && error.response){
            return error.response as AxiosResponse<IUpdateWorkspaceResponse>;
        }
        throw new Error("Workspace not updated");
    }
}