"use client";

import { useMutation } from "@tanstack/react-query"
import { registerUser } from "../services/api";
import { IRegisterInterface } from "../interface/RegisterInterface";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";





export const CreateRegisterHook = () =>{

    const router = useRouter();

    return useMutation({
        mutationKey:['create-user-mutation'],
        mutationFn:(request: IRegisterInterface)=>{
            return registerUser(request);
        },
        retry:false,
        onSuccess:(data)=>{
            if(Number(data.status) == 201){
                toast.success("User resgistered successfully",{
                    position:"top-center",
                    removeDelay:1000
                });
                router.replace("/login");
            }else if(Number(data.status) == 302){
                toast.error(data.data.errors.message,{
                    position:"top-center",
                    removeDelay:1000
                });
                router.push("/login");
            }
        },
        onError:(error)=>{
            toast.error(error.message,{
                position:"top-center"
            })
        }
    });
}