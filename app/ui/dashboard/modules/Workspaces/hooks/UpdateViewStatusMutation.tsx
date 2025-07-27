import { useMutation, useQueryClient } from "@tanstack/react-query"
import { IUpdateWorkspace } from "../interfaces/UpdateWorkspaceInterface";
import { updateWorkspace } from "../services/api";
import toast from "react-hot-toast";





export const UpdateViewStatusMutation = () =>{

    const queryClient = useQueryClient();

    return useMutation({
        mutationKey:['view-status-update'],
        mutationFn:(request:IUpdateWorkspace)=>{
            return updateWorkspace(request);
        },
        retry:1,
        onSuccess:(data)=>{
            if(data.data.success){
                toast.success(data.data.data.result.message);
            }
            queryClient.invalidateQueries({queryKey:['get-workspaces-by-id']})
        },
        onError:()=>{
            
        }
    });
}