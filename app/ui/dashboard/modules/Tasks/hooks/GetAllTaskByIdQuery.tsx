import { useQuery } from "@tanstack/react-query"
import { getAllTasksById } from "../services/api";





export const GetAllTaskByIdQuery = (userId:string) =>{
    return useQuery({
        queryKey:["get-task-by-id"],
        queryFn:()=> getAllTasksById(userId),
        retry: false,
        refetchOnMount: true,
        refetchOnWindowFocus:false,
        enabled: !!userId
    });
}