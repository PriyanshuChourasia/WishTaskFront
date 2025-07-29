import { useMutation } from "@tanstack/react-query"
import { ICreateProjectInterface } from "../interfaces/CreateProjectInterface"
import { createProject } from "../services/api"
import toast from "react-hot-toast"



export const CreateProject = () =>{
    return useMutation({
        mutationKey:['create-project-mutation-key'],
        mutationFn:(request: ICreateProjectInterface)=>{
            return createProject(request);
        },
        retry:false,
        onSuccess:(data)=>{
            if(data.data.success){
                toast.success("Project created successfully")
            }
        },
        onError:(error)=>{
            toast.error(error.message);
        }
    })
}