"use client";
import {Field, Form, Formik} from "formik";
import { useState } from "react"
import {Eye,EyeOff} from "lucide-react";
import { LoginMutation } from "../hooks/LoginMutation";


export default function LoginForm(){

    const [showPassword,setShowPassword] = useState<boolean>(false);
    const {mutate,isPending} = LoginMutation();


    return(
        <div>
            <Formik
                onSubmit={(values,action)=>{
                    console.log("values: ",values);
                    mutate({
                        email: values.email,
                        password: values.password
                    });
                    setTimeout(() => {
                        action.setSubmitting(false);
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
                                <Field 
                                    type="email"
                                    placeholder="Username"
                                    name="email"
                                    required
                                    className="py-4 rounded-4xl mb-6 pl-4 dark:text-white text-black px-2 w-full ring-0 focus:ring-0 outline-none focus:outline-none border-1 border-gray-600 focus:border-gray-900"
                                />
                                <div className="relative w-full">
                                    <Field 
                                        type={`${showPassword ? "text" : "password"}`}
                                        placeholder="Password"
                                        name="password"
                                        required
                                        className="py-4 pl-4 rounded-4xl mb-3 dark:text-white text-black px-2 w-full ring-0 focus:ring-0 outline-none focus:outline-none border-1 border-gray-600 focus:border-gray-900"
                                    />
                                    <div className="absolute top-3 cursor-pointer right-5">
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
                                    <button type="submit" className="bg-gray-900 text-md font-medium hover:bg-gray-950 text-white w-full rounded-lg cursor-pointer py-3 text-center">
                                        {isPending ? "Logging..." : "Login"}
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