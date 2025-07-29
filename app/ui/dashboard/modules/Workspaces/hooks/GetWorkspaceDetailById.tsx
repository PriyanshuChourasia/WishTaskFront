"use client";
import { useQuery } from "@tanstack/react-query"
import { getWorkspaceDetailById } from "../services/api"




export const GetWorkspaceDetailById = (workspaceId:string) =>{
    return useQuery({
        queryKey: ['get-workspace-detail-by-id',workspaceId],
        queryFn:()=> getWorkspaceDetailById(workspaceId),
        retry:1,
        refetchOnMount:false,
        refetchOnWindowFocus:false,
        refetchOnReconnect:true,
        enabled: !!workspaceId
    })
}