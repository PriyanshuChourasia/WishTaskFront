"use client";
import { useAppSelector } from "@/app/ui/redux"
import { BoardCard } from "./BoardCard";
import { ITaskResponse } from "../../../interfaces/TaskResponse";
import { useEffect, useState } from "react";
import { WorkStatusColor } from "@/app/ui/utils/Enums/WorkStatusEnum";


interface TaskWithStatus extends Record<string,any>{
    tasks:ITaskResponse[],
}



export const BoardBox = () =>{

    const taskData = useAppSelector((state)=> state.taskResponseData.taskData);
    const [filteredTask,setFileteredTask] = useState<TaskWithStatus[]>([]);
    const statusHeading = new Set(taskData.data.result.map(item => item.status));

    useEffect(()=>{
        const newFilteredTask:TaskWithStatus[] = [];

        statusHeading.forEach(status=>{
            const task = taskData.data.result.filter(x => x.status == status);
            
            const newTaskObj: TaskWithStatus = {
                status:status,
                tasks:task
            };
            newFilteredTask.push(newTaskObj);
        });
        setFileteredTask(newFilteredTask);
    },[taskData]);

    return(
        <div className="flex flex-wrap gap-4">
            {
                filteredTask.map((item,index)=>(
                    <div key={index} className="h-full w-full min-w-[350px] max-w-lg px-4 rounded-md py-2 max-h-[80vh] overflow-y-auto  bg-gray-300">
                        <h1 style={{color: WorkStatusColor[item.status]}} className="mb-2 bg-gray-50 sticky top-0 left-0  w-fit px-2 py-1 rounded-md font-semibold pl-2">{item.status}</h1>
                        {
                            item.tasks.map((task,index)=>(
                                <BoardCard key={index} data={task} />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}