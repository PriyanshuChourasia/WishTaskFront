"use client";
import { useMutation } from "@tanstack/react-query"
import { loginQueryKey } from "../services/queryKey"
import { ILoginRequest } from "../interfaces/LoginRequest"
import { loginUser } from "../services/api"
import toast from "react-hot-toast"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"




export const LoginMutation = () =>{

    const router = useRouter();

    return useMutation({
        mutationKey:[loginQueryKey],
        mutationFn:(loginRequest:ILoginRequest)=>{
            return loginUser(loginRequest);
        },
        retry:false,
        onSuccess: async (data)=>{
            const accessToken = data.data.data.access_token;
            if(accessToken){
                
                toast.success("Login Successfull",{
                    removeDelay: 2000,
                    position:"top-center"
                });
                Cookies.set("access_token",accessToken,{
                    sameSite: "Lax",
                    expires: 7
                });
                Cookies.set("refresh_token",data.data.data.refresh_token,{
                    sameSite:"Lax",
                    secure: true,
                    expires: 7,
                });
                await new Promise((resolve) => setTimeout(resolve, 50));
                router.replace("/dashboard");
            }
        },
        onError:(error)=>{
            if(error){
                toast.error(error.message,{

                });
            }
        }
    })
}