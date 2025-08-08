"use client";

import { Search } from "lucide-react";

interface TaskSearchInterface{
    setTaskSearch:(text:string) => void;
    taskSearch:string;
}


export const TaskSearch: React.FC<TaskSearchInterface>  = ({setTaskSearch,taskSearch}) =>{
    return(
        <div className="border-[1px] border-gray-800 rounded-sm flex items-center bg-white px-2 w-full relative">
            <Search className="h-4 w-4 dark:text-black"/>
            <input
                value={taskSearch} 
                onChange={(e)=> setTaskSearch(e.target.value)} 
                type="search" 
                id="task-search" 
                className="py-1 px-2 border-none dark:placeholder:text-gray-800 focus:outline-none outline-none text-sm bg-white w-full"
                placeholder="Search...."
            />
        </div>
    )
}