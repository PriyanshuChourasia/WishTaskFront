"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ActivityStatus } from "../../interfaces/CreateActivityInterface";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/app/ui/redux";
import { CreateActivityHook } from "../../hooks/CreateActivityAPI";
import { useEffect } from "react";
import { FormValidationHook } from "../../hooks/FormValidationHook";




export default function CreateForm({setOpen}:{setOpen:(open:boolean)=> void}){

    const userId = useAppSelector((state)=> state.global.userDetails.data.id);
    const {mutate,isPending,isSuccess} = CreateActivityHook();

    useEffect(()=>{
        if(isSuccess){
            setOpen(false);
        }
    },[isSuccess,setOpen]);

    return(
        <Formik
            onSubmit={(values,action)=>{
                mutate(values);
                setTimeout(() => {
                    action.setSubmitting(false);
                }, 600);
                
            }}

            initialValues={{
                user_id: `${userId}`,
                name:"",
                topic:"",
                description:"",
                status:ActivityStatus.DRAFT,
                startTime:"",
                endTime:"",
            }}
            validationSchema={FormValidationHook}
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
                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="status">Status</label>
                        <Field 
                            as="select"
                            name="status"
                            id="status"
                            className="outline-none text-sm border-[1px] rounded dark:bg-black dark:border-gray-400 focus:dark:border-gray-100 py-1 px-1 border-gray-700 hover:border-gray-800"
                        >
                            {
                                Object.values(ActivityStatus).map((item,index)=>(
                                    <option className="text-sm dark:text-white" key={index} value={item}>{item}</option>
                                ))
                            }
                        </Field>
                    </div>
                    <div className="flex justify-between mb-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="startTime">Start Time</label>
                            <Field type="datetime-local" className="border-2 border-gray-300 rounded px-2 dark:text-white" name="startTime" id="startTime" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="endTime">End Time</label>
                            <Field type="datetime-local" className="border-2 border-gray-300 rounded px-2 dark:text-white" name="endTime" id="endTime" />
                        </div>
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