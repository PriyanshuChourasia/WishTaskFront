"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { CreateProjectValidationSchema } from "../../hooks/CreateProjectValidation";
import { CreateProjectHook } from "../../hooks/CreateProjectHook";
import { useAppSelector } from "@/app/ui/redux";
import { useQueryClient } from "@tanstack/react-query";




export default function CreateProjectForm({setOpen}:{setOpen:(open:boolean)=> void}){


    const today  = function dateFormat():string{
        const datee = new Date();
        const year = datee.getFullYear();
        const month = datee.getMonth();
        const date = datee.getDate();
        return `${year}-${month < 10 ? `0${month}` : month}-${date< 10 ? `0${date}` : date}`;
    }


    const queryClient = useQueryClient();
    
    const {mutate,isPending,isSuccess} = CreateProjectHook();
    const workspaceId = useAppSelector((state) => state.projectData.workspaceId);


    useEffect(()=>{
        if(isSuccess){
            queryClient.invalidateQueries({queryKey:['get-project-by-workspace-id']});
            setOpen(false);
        }
    },[isSuccess,queryClient,setOpen]);

    return(
        <Formik
            onSubmit={(values,action)=>{
                mutate({
                    name: values.name,
                    topic: values.topic,
                    description: values.description,
                    startDate: new Date(values.startDate).toISOString(),
                    dueDate: new Date(values.dueDate).toISOString(),
                    workspaceId: values.workspaceId
                });
                setTimeout(() => {
                    action.setSubmitting(false);
                }, 600);
                
            }}

            initialValues={{
                name:"",
                topic:"",
                description:"",
                startDate:today(),
                dueDate:today(),
                workspaceId:workspaceId,
            }}
            validationSchema={CreateProjectValidationSchema}
        >
            {({resetForm})=>(
                <Form>
                    <div className="flex flex-col overflow-hidden gap-2 mb-2">
                        <label htmlFor="name">Title</label>
                        <Field 
                            name="name"
                            id="name"
                            placeholder="Enter name"
                            className="outline-none border-[1px] rounded dark:border-gray-400 focus:dark:border-gray-100 py-1 px-1 border-gray-700 hover:border-gray-800"
                        />
                        <ErrorMessage component={'div'} name="name" className="text-red-500" />
                    </div>
                    <div className="flex flex-col gap-2 mb-2">
                        <label htmlFor="topic">Topic</label>
                        <Field 
                            name="topic"
                            id="topic"
                            placeholder="Enter Topic"
                            className="outline-none border-[1px] rounded dark:border-gray-400 focus:dark:border-gray-100 py-1 px-1 border-gray-700 hover:border-gray-800"
                        />
                        <ErrorMessage component={'div'} name="topic" className="text-red-500" />
                    </div>
                    <div className="flex flex-col gap-2 mb-2">
                        <label htmlFor="description">Description</label>
                        <Field 
                            as="textarea"
                            name="description"
                            id="description"
                            rows="4"
                            cols="50"
                            placeholder="Enter your description"
                            className="outline-none border-[1px] rounded dark:border-gray-400 focus:dark:border-gray-100 py-1 px-1 border-gray-700 hover:border-gray-800"
                        />
                        <ErrorMessage component={'div'} name="description" className="text-red-500" />
                    </div>
                    <div className="flex justify-between mt-3 mb-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="startDate">Start Time</label>
                            <Field type="date"  className="border-2 border-gray-300 rounded px-2 dark:text-white" name="startDate" id="startDate" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="dueDate">Tentative Time</label>
                            <Field type="date" className="border-2 border-gray-300 rounded px-2 dark:text-white" name="dueDate" id="dueDate" />
                        </div>
                        <Field type="text" className="border-2 sr-only border-gray-300 rounded px-2 dark:text-white" value={workspaceId} name="workspaceId" id="workspaceId" />
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