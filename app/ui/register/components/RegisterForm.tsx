"use client";
import { ErrorMessage, Field, Form, Formik } from "formik"
import { RegisterValidationHook } from "../hooks/RegisterValidation";
import { Button } from "@/components/ui/button";
import { CreateRegisterHook } from "../hooks/CreateUserHook";
import Link from "next/link";





export const RegisterForm = () =>{

    const {mutate,isPending} = CreateRegisterHook();


    return(
        <Formik 
            onSubmit={(values,action)=>{
                setTimeout(() => {
                    mutate(values);
                    action.setSubmitting(false);
                }, 900);
            }}
            initialValues={{
                name:"",
                email:"",
                password:""
            }}
            validationSchema={RegisterValidationHook}
        >
            {()=>(
                <Form>
                    <div className="mb-4">
                        <label htmlFor="name" className="text-base font-semibold">Name</label>
                        <Field
                            id="name"
                            name="name"
                            placeholder="Enter name"
                            className="w-full border-[1px] px-1 outline-none text-base border-black rounded py-2 dark:text-white"
                        />
                        <ErrorMessage component={'div'} className="text-red-500" name="name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-base font-semibold">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="user@yopmail.com"
                            className="w-full border-[1px] px-1 text-base outline-none border-black rounded py-2 dark:text-white"
                        />
                        <ErrorMessage component={'div'} className="text-red-500" name="email" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="text-base font-semibold">Password</label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="**************"
                            className="w-full border-[1px] px-1 text-base outline-none border-black rounded py-2 dark:text-white"
                        />
                        <ErrorMessage component={'div'} className="text-red-500" name="password" />
                    </div>

                    <div className="w-full mb-8">
                        <Button type="submit" className="w-full h-12 cursor-pointer">
                            {isPending ? "Registering....." : "Register"}
                        </Button>
                    </div>
                    <div className="text-center">
                        <h2>Have an account? <Link href={'/login'} className="text-base text-blue-600">Sign In</Link></h2>
                    </div>
                </Form>
            )}
        </Formik>
    )
}