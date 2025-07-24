import { useMutation, useQueryClient } from "@tanstack/react-query"
import { IWorkSpaceInterface } from "../interfaces/CreateWorkspaceInterface"
import { createWorkspace } from "../services/api"


export const CreateWorkdspaceMutation = () =>{

    const queryClient = useQueryClient();

    return useMutation({
        mutationKey:['create-workspace-mutate'],
        mutationFn: (request:IWorkSpaceInterface)=>{
            return createWorkspace(request);
        },
        retry:false,
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:['get-workspaces-by-id']})
        },
        onError:(error)=>{

        }
    })
}