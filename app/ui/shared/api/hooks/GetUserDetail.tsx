import { useQuery } from "@tanstack/react-query"
import { getUserDetails } from "../services/api"




export const GetUserDetails = () =>{
    return useQuery({
        queryKey:['user-details'],
        queryFn: getUserDetails,
        retry:1,
        retryOnMount:false,
        refetchOnWindowFocus:false,
        refetchOnReconnect:true,
        enabled:true
    })
}