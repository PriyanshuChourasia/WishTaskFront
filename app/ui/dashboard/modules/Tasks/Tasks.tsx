"use client";
import BottomBorder from "@/app/ui/shared/Components/Border/BottomBorder";
import { TaskHeader } from "./components/TaskHeader/TaskHeader";
import { useAppDispatch, useAppSelector } from "@/app/ui/redux";
import { GetAllTaskByIdQuery } from "./hooks/GetAllTaskByIdQuery";
import { useEffect } from "react";
import { setTaskData } from "./state/tasks";
import { TaskResponseInitialstate } from "./initialstate/TaskResponseInitialstate";



export default function Tasks(){
    const userId = useAppSelector((state)=> state.global.userDetails.data.id);
    const dispatch = useAppDispatch();
    const {data,isSuccess} = GetAllTaskByIdQuery(userId);

    useEffect(()=>{
        if(isSuccess && data.data.success){
            dispatch(setTaskData(data.data));
        }else if(!isSuccess && !data?.data.success){
            setTaskData(TaskResponseInitialstate);
        }
    },[isSuccess,data,dispatch]);

    return(
        <div className="px-4 py-4">
            <div className="mb-5">
                <h1>Tasks</h1>
                <BottomBorder/>
            </div>
            <TaskHeader/>
        </div>
    )
}