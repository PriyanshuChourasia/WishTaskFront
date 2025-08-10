"use client";

import { useMutation } from "@tanstack/react-query"
import { registerUser } from "../services/api";
import { IRegisterInterface } from "../interface/RegisterInterface";
import toast from "react-hot-toast";
import { useRouter } from "next/compat/router";





export const CreateRegisterHook = () =>{

    const router = useRouter();

    return useMutation({
        mutationKey:['create-user-mutation'],
        mutationFn:(request: IRegisterInterface)=>{
            return registerUser(request);
        },
        retry:false,
        onSuccess:(data)=>{
            if(data.data.success){
                toast.success("User resgistered successfully",{
                    position:"top-center",
                    removeDelay:1000
                });
                router?.replace("/login");
            }
        },
        onError:(error)=>{
            toast.error(error.message,{
                position:"top-center"
            })
        }
    });
}