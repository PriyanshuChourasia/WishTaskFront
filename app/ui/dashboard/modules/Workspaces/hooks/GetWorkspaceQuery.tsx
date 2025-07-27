import { useQuery } from "@tanstack/react-query"
import { getWorkSpaceByUserId } from "../services/api"



export const GetWorkspaceQuery = (id:string) =>{
    return useQuery({
        queryKey:['get-workspaces-by-id',id],
        queryFn:()=> getWorkSpaceByUserId(id),
        retry:1,
        refetchOnMount:false,
        refetchOnReconnect:true,
        refetchOnWindowFocus:false,
        enabled: !!id
    })
}