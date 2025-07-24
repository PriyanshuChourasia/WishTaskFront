"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/app/ui/redux";
import { useEffect } from "react";
import { CreateWorkdspaceMutation } from "../../hooks/CreateWorkdspaceMutation";
import { ViewModeStatus } from "../../interfaces/CreateWorkspaceInterface";
import { WorkspaceFormValidationSchema } from "../../hooks/WorkspaceFormValidation";




export default function CreateWorkspaceForm({setOpen}:{setOpen:(open:boolean)=> void}){

    const userId = useAppSelector((state)=> state.global.userDetails.data.id);
    const {mutate,isPending,isSuccess} = CreateWorkdspaceMutation();

    useEffect(()=>{
        if(isSuccess){
            setOpen(false);
        }
    },[isSuccess]);

    return(
        <Formik
            onSubmit={(values,action)=>{
                console.log(action,values);
                mutate(values);
                setTimeout(() => {
                    action.setSubmitting(false);
                }, 600);
                
            }}

            initialValues={{
                name: '',
                viewMode: ViewModeStatus.PUBLIC,
                shared: false,
                createdBy:`${userId}`
            }}
            validationSchema={WorkspaceFormValidationSchema}
        >
            {({resetForm})=>(
                <Form>
                    <div className="flex flex-col gap-2 mb-2">
                        <label htmlFor="name">Name</label>
                        <Field 
                            name="name"
                            id="name"
                            placeholder="Enter name"
                            className="outline-none border-[1px] rounded dark:border-gray-400 focus:dark:border-gray-100 py-1 px-1 border-gray-700 hover:border-gray-800"
                        />
                        <ErrorMessage component={'div'} name="name" className="text-red-500" />
                    </div>
                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="viewMode">View Mode</label>
                        <Field 
                            as="select"
                            name="viewMode"
                            id="viewMode"
                            className="outline-none text-sm border-[1px] rounded dark:bg-black dark:border-gray-400 focus:dark:border-gray-100 py-1 px-1 border-gray-700 hover:border-gray-800"
                        >
                            {
                                Object.values(ViewModeStatus).map((item,index)=>(
                                    <option className="text-sm dark:text-white" key={index} value={item}>{item}</option>
                                ))
                            }
                        </Field>
                    </div>
                    <div className="flex gap-4 justify-end">
                        <Button onClick={()=> {resetForm(); setOpen(false)}} className="border-2 dark:text-black border-red-500 hover:bg-white py-4  bg-white text-black">Cancel</Button>
                        <Button type="submit" className="border-2 border-gray-200 cursor-pointer py-4 text-white dark:text-white bg-green-500 hover:bg-green-600">
                            {isPending ? "Submitting..." : "Submit"}
                        </Button>
                        
                    </div>
                </Form>
            )}  
        </Formik>
    )
}