import { useQuery } from "@tanstack/react-query"
import { getActivitiesById } from "../services/api"





export const GetActivityById = (userid:string) =>{
    return useQuery({
        queryKey:['get-activity-by-id',userid],
        queryFn:() => getActivitiesById(userid),
        retry:1,
        refetchOnReconnect:true,
        refetchOnMount:true,
        refetchOnWindowFocus:true,
        enabled: !!userid
    })
}