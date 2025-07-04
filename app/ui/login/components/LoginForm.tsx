"use client";
import {Form, Formik} from "formik";
import { useState } from "react"
import {Eye,EyeOff} from "lucide-react";
import { Button } from "@/components/ui/button";


export default function LoginForm(){

    const [showPassword,setShowPassword] = useState<boolean>(false);

    return(
        <div>
            <Formik
                onSubmit={(action,values)=>{
                    console.log("values: ",values);
                    setTimeout(() => {
                        console.log("form submitted");
                    }, 600);
                }}
                initialValues={{
                    email:"",
                    password:"",
                }}
            >
                {
                    ()=>(
                        <Form className="flex justify-center">
                            <div className="flex w-3/6 flex-col items-center mt-8">
                                <input 
                                    type="email"
                                    placeholder="Username"
                                    className="py-3 rounded-3xl mb-6 pl-4 dark:text-white text-black px-2 w-full ring-0 focus:ring-0 outline-none focus:outline-none border-1 border-gray-600 focus:border-gray-900"
                                />
                                <div className="relative w-full">
                                    <input 
                                        type={`${showPassword ? "text" : "password"}`}
                                        placeholder="Password"
                                        className="py-3 pl-4 rounded-3xl mb-3 dark:text-white text-black px-2 w-full ring-0 focus:ring-0 outline-none focus:outline-none border-1 border-gray-600 focus:border-gray-900"
                                    />
                                    <div className="absolute top-2 cursor-pointer right-4">
                                        {
                                            showPassword ?
                                            <Eye onClick={()=> setShowPassword(!showPassword)} />
                                            :
                                            <EyeOff onClick={()=> setShowPassword(!showPassword)} />
                                        }
                                    </div>
                                </div>
                                <div className="w-full text-right mb-8">
                                    <span>Forgot Password?</span>
                                </div>
                                <div className="w-full">
                                    <button type="submit" className="bg-gray-900 text-medium hover:bg-gray-950 text-white w-full rounded-lg cursor-pointer py-3 text-center">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}