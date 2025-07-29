import { useQuery } from "@tanstack/react-query"
import { getProjectByWorkspaceId } from "../services/api"



export const GetProjectByWorkspaceId = (workspaceId:string) => {
    return useQuery({
        queryKey:['get-project-by-workspace-id',workspaceId],
        queryFn:() => getProjectByWorkspaceId(workspaceId),
        retry:1,
        refetchOnMount:false,
        refetchOnWindowFocus:false,
        enabled: !!workspaceId
    })
}