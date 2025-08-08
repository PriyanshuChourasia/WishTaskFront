import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createTasks } from "../services/api"
import { ITaskRequestInterface } from "../interfaces/TaskCreateRequest"
import toast from "react-hot-toast"



export const CreateTaskMutation = () =>{

    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["create-task-mutation"],
        mutationFn:(request:ITaskRequestInterface)=>{
            return createTasks(request);
        },
        retry:false,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['get-task-by-id']})
            toast.success("Task created successfully",{
                duration: 1000,
                position:"top-right",
            })
        },
        onError:(error)=>{
            toast.error(error.message,{
                duration:1200,
                position:"top-center"
            })
        }
    })
}