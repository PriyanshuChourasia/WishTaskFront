"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ActivityOverview } from "../Overview/ActivityOverview";
import { BoardView } from "../BoardView/BoardView";
import { ListView } from "../ListView/ListView";
import { TableView } from "../TableView/TableView";
import { TimelineView } from "../TimelineView/TimelineView";
import { Kanban, List, Sheet, SquareKanban } from "lucide-react";
import ActivityCreateModal from "../CreateModal/ActivityCreateModal";
import { useAppSelector } from "@/app/ui/redux";
import { GetActivityById } from "../../hooks/GetActivityById";
import ImportDropdown from "../ImportButtons/ImportDropdown";
import ImportExcelButton from "../ImportButtons/ImportExcelButton";
import ImportExcelFileModal from "../ImportButtons/Components/ImportFileModal";




export default function ActivityTabs(){
    
    const userID = useAppSelector((state)=> state.global.userDetails?.data?.id);

    const {data,isLoading} = GetActivityById(userID);

    console.log("Data",data);

    return(
        <div className="w-full">
            <Tabs defaultValue="overview">
                <TabsList className="w-full h-14 px-3 flex justify-between">
                    <div>
                        <TabsTrigger className="cursor-pointer" value="overview">
                            <SquareKanban />
                            <span>Overview</span>
                        </TabsTrigger>
                        <TabsTrigger className="cursor-pointer" value="Board">
                            <Kanban />
                            <span>Board</span>
                        </TabsTrigger>
                        <TabsTrigger className="cursor-pointer" value="List">
                            <List />
                            <span>List</span>
                        </TabsTrigger>
                        <TabsTrigger className="cursor-pointer" value="Table">
                            <Sheet />
                            <span>Table</span>
                        </TabsTrigger>
                        <TabsTrigger className="cursor-pointer" value="Timeline">Timeline</TabsTrigger>
                    </div>
                    <div className="space-x-4">
                        {/* <input type="search" name="" id="" /> */}
                        {/* Add Search Filter Sort */}
                        {/* Import Button */}
                        <ImportExcelFileModal/>
                        {/* Create Activity */}
                        <ActivityCreateModal/>
                    </div> 
                </TabsList>
                <TabsContent value="overview">
                    <ActivityOverview data={data?.data ? data?.data.data.results : []} isLoading={isLoading}/>
                </TabsContent>
                <TabsContent value="Board">
                    <BoardView data={data?.data ? data?.data.data.results : []} isLoading={isLoading} />
                </TabsContent>
                <TabsContent value="List">
                    <ListView data={data?.data ? data?.data.data.results : []}/>
                </TabsContent>
                <TabsContent value="Table">
                    <TableView/>
                </TabsContent>
                <TabsContent value="Timeline">
                    <TimelineView/>
                </TabsContent>
            </Tabs>
        </div>
    )
}