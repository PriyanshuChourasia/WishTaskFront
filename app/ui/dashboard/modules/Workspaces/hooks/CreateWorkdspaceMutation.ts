import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ICreateWorkspaceInterface } from "../interfaces/CreateWorkspaceInterface"
import { createWorkspace } from "../services/api"


export const CreateWorkdspaceMutation = () =>{

    const queryClient = useQueryClient();

    return useMutation({
        mutationKey:['create-workspace-mutate'],
        mutationFn: (request:ICreateWorkspaceInterface)=>{
            return createWorkspace(request);
        },
        retry:false,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['get-workspaces-by-id']})
        },
        onError:()=>{

        }
    })
}