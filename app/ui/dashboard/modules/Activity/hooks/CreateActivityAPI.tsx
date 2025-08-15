import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ICreateAcitivityInterface } from "../interfaces/CreateActivityInterface"
import { createActivity } from "../services/api"
import toast from "react-hot-toast";




export const CreateActivityHook = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationKey:['create-activity'],
        mutationFn:(request:ICreateAcitivityInterface)=>{
            return createActivity(request);
        },
        retry:false,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['get-activity-by-id']});
            toast.success("Activity created successfully");
        },
        onError:()=>{
        }
    });
}