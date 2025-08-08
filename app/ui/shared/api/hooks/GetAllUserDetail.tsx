import { useQuery } from "@tanstack/react-query"
import { getAllUsers } from "../services/api"





export const GetAllUserDetail = () =>{
    return useQuery({
        queryKey:['get-all-user-detail'],
        queryFn: getAllUsers,
        retry: 1,
        refetchOnWindowFocus:false,
        refetchOnMount: false,
        refetchOnReconnect: true,
        enabled:true
    })
}