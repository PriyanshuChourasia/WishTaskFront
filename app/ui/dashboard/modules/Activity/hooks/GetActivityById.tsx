import { useQuery } from "@tanstack/react-query"
import { getActivitiesById } from "../services/api"





export const GetActivityById = (userid:string) =>{
    return useQuery({
        queryKey:['get-activity-by-id'],
        queryFn:() => getActivitiesById(userid),
        retry:false,
        refetchOnReconnect:true,
        refetchOnMount:false,
        refetchOnWindowFocus:false,
        enabled: !!userid
    })
}