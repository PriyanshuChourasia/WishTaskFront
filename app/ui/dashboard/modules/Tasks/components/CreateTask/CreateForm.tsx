"use client";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik"
import { ITaskRequestInterface } from "../../interfaces/TaskCreateRequest";
import { useAppSelector } from "@/app/ui/redux";
import { formatDateTimeLocalIST } from "@/app/ui/utils/DateTimeUtils/FormatDataTimeLocalIst";
import { WorkStatusEnum } from "@/app/ui/utils/Enums/WorkStatusEnum";
import { Button } from "@/components/ui/button";
import { PriorityEnum } from "@/app/ui/utils/Enums/PriorityEnum";
import { CreateTaskMutation } from "../../hooks/CreateTaskMutation";
import { useEffect } from "react";


interface CreateFormInterface{
    setOpen:(open:boolean)=> void;
}




export const CreateForm: React.FC<CreateFormInterface> = ({setOpen}) =>{

    const userId = useAppSelector((state)=> state.global.userDetails.data);
    const allUsers = useAppSelector((state) => state.global.allUserDetails);
    const {mutate,isSuccess,isPending} = CreateTaskMutation();

    useEffect(()=>{
        if(isSuccess){
            setOpen(false);
        }
    },[isSuccess]);

    return(
        <Formik
            onSubmit={(values,action)=>{
                setTimeout(() => {
                    mutate({
                        name: values.name,
                        description: values.description,
                        createdBy: values.createdBy,
                        assignedBy: values.assignedBy,
                        assignedTo: values.assignedTo,
                        assignedDate: new Date(values.assignedDate).toISOString(),
                        startDate: new Date(values.startDate).toISOString(),
                        tentativeDate: new Date(values.tentativeDate).toISOString(),
                        status: values.status,
                        priority: values.priority
                    });
                    action.setSubmitting(false);
                }, 800);
            }}
            initialValues={{
                name:"",
                description:"",
                createdBy:userId.id,
                assignedBy:userId.id,
                assignedTo:userId.id,
                assignedDate: formatDateTimeLocalIST(new Date().getTime()),
                startDate: formatDateTimeLocalIST(new Date().getTime()),
                tentativeDate: formatDateTimeLocalIST(new Date().getTime()),
                status: String(WorkStatusEnum.DRAFT),
                priority: String(PriorityEnum.MEDIUM)
            }}
        >
            {({}:FormikProps<ITaskRequestInterface>)=>(
                <Form className="mt-3 flex flex-col gap-3">
                        <div className="flex justify-between">
                            <div>
                                <h2 className="font-bold">User{": "} {userId.name}</h2>
                            </div>
                            <div className="flex justify-end gap-2 items-center">
                                <label htmlFor="priority" className="text-sm font-semibold dark:text-white">Priority</label>
                                <Field as="select" name="priority" className=" dark:border-gray-400 outline-none dark:text-white border-[0] border-gray-600 focus:outline-black rounded focus:border-black">
                                    {
                                        Object.values(PriorityEnum).map((item,index)=>(
                                            <option className="dark:text-black" key={index} value={item}>{item}</option>
                                        ))
                                    }
                                </Field>
                            </div>
                           
                        </div>
                        <div>
                            <label htmlFor="name" className="text-sm font-medium dark:text-white">Task name</label>
                            <Field 
                                id="name" 
                                name="name"
                                placeholder="Enter task name"
                                className="outline-none border-[1px] border-gray-400 dark:border-gray-400 dark:text-white w-full px-1 py-2 dark:placeholder:text-gray-500 rounded focus:border-black"
                            />
                            <ErrorMessage name="name" component={'div'} className="text-red-500" />
                        </div>
                        <div>
                            <label htmlFor="description" className="text-sm dark:text-white font-medium">Task Description</label>
                            <Field
                                as="textarea"
                                id="description"
                                name="description"
                                placeholder="Enter task description"
                                className="outline-none border-[1px] border-gray-400 dark:border-gray-400 w-full px-1 dark:text-white py-2 dark:placeholder:text-gray-500 rounded focus:border-black"
                            />
                            <ErrorMessage name="description" component={'div'} className="text-red-500" />
                        </div>
                        <div className="flex items-center gap-3">
                            {/* <div className="flex flex-col w-full">
                                <label htmlFor="assignedTo" className="font-medium dark:text-white">Assigned To</label>
                                <Field as="select" name="assignedTo" className="w-full dark:border-gray-400 dark:text-white py-2 mt-1 border-[1px] border-gray-600 focus:outline-black rounded focus:border-black">
                                    <option defaultValue={""}>Select user</option>
                                    {
                                        allUsers.data.result.map((item,index)=>(
                                            <option className="dark:text-black" key={index} value={item.id}>{item.name}</option>
                                        ))
                                    }
                                </Field>
                            </div> */}
                            <div className="w-full">
                                <label htmlFor="status" className="font-medium dark:text-white">Status</label>
                                <Field as="select" name="status" className="w-full py-2 mt-1 dark:border-gray-400 dark:text-white border-[1px] border-gray-600 focus:outline-black rounded focus:border-black">
                                    {
                                        Object.values(WorkStatusEnum).map((item,index)=>(
                                            <option className="dark:text-black" key={index} value={item}>{item}</option>
                                        ))
                                    }
                                </Field>
                            </div>
                        </div>
                        
                        <div className="flex gap-3">
                            <div>
                                <label htmlFor="startDate" className="font-medium dark:text-white">Start Date</label>
                                <Field
                                    type="datetime-local"
                                    id="startDate"
                                    name="startDate"
                                    className="outline-none border-[1px] border-gray-400 dark:border-gray-400 dark:text-white w-full px-1 py-2 rounded focus:border-black"
                                />
                            </div>
                            <div>
                                <label htmlFor="tentativeDate" className="font-medium dark:text-white">Tentative Date</label>
                                <Field
                                    type="datetime-local"
                                    id="tentativeDate"
                                    name="tentativeDate"
                                    className="outline-none border-[1px] border-gray-400 dark:border-gray-400 dark:text-white w-full px-1 py-2 rounded focus:border-black"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 my-4">
                            <Button type="button" onClick={()=> setOpen(false)} className="!bg-red-500 text-white">Cancel</Button>
                            <Button type="submit"  className="!bg-green-600 text-white cursor-pointer">
                                {isPending ? "Submitting...." : "Submit"}
                            </Button>
                        </div>
                </Form>
            )}
        </Formik>
    )
}