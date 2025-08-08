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
                <TabsList className="flex justify-between w-full h-14 px-2 !bg-gray-200">
                    <div>
                        <TabsTrigger className="cursor-pointer" value="overview">
                            <SquareKanban />
                            <span>Overview</span>
                        </TabsTrigger>
                        <TabsTrigger className="cursor-pointer" value="board">
                            <SquareKanban />
                            <span>Board</span>
                        </TabsTrigger>
                        <TabsTrigger className="cursor-pointer" value="table">
                            <SquareKanban />
                            <span>Table</span>
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