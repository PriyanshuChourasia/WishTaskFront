"use client";
import { useState } from "react"
import { TaskSearch } from "./TaskSearch"
import { TaskIcons } from "./TaskIcons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SquareKanban } from "lucide-react";
import { TaskBoard } from "../../modules/Board/TaskBoard";




export const TaskHeader = () =>{

    const [taskSearch,setTaskSearch] = useState<string>("");

    return(
        <div className="w-full">
            <Tabs defaultValue="overview">
                <TabsList className="flex justify-between w-full h-14 px-2 dark:text-black !bg-gray-200">
                    <div>
                        <TabsTrigger className="cursor-pointer dark:text-black" value="overview">
                            <SquareKanban className="dark:text-black"/>
                            <span className="dark:text-black">Overview</span>
                        </TabsTrigger>
                        <TabsTrigger className="cursor-pointer dark:text-black" value="board">
                            <SquareKanban className="dark:text-black" />
                            <span className="dark:text-black">Board</span>
                        </TabsTrigger>
                        <TabsTrigger className="cursor-pointer dark:text-black" value="table">
                            <SquareKanban className="dark:text-black" />
                            <span className="dark:text-black">Table</span>
                        </TabsTrigger>
                    </div>
                    <div className="overflow-hidden flex">
                        <TaskSearch taskSearch={taskSearch} setTaskSearch={setTaskSearch} />
                        <TaskIcons/>
                    </div>
                   
                </TabsList>
                <TabsContent value="overview">
                    <h1>Overview</h1>
                </TabsContent>
                <TabsContent value="board">
                    <TaskBoard/>
                </TabsContent>
                <TabsContent value="table">
                    <h3>Table</h3>
                </TabsContent>
            </Tabs>
        </div>
    )
}