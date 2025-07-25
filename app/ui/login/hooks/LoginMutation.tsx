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
        onSuccess:(data)=>{
            const accessToken = data.data.data.access_token;
            if(accessToken){
                console.log("next router push");
                
                toast.success("Login Successfull",{
                    removeDelay: 2000,
                    position:"top-center"
                });
                Cookies.set("access_token",accessToken,{
                    sameSite: "None",
                    secure: true,
                    expires: 7
                });
                Cookies.set("refresh_token",data.data.data.refresh_token,{
                    sameSite:"None",
                    secure: true,
                    expires: 7,
                });
                router.push("/dashboard");
            }
        },
        onError:(error)=>{
            console.log("Error: ",error.message);
            if(error){
                toast.error(error.message,{

                });
            }
        }
    })
}