"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Kanban, SquareKanban } from "lucide-react";
import { useAppSelector } from "@/app/ui/redux";
import { GetWorkspaceQuery } from "../../hooks/GetWorkspaceQuery";
import { WorkspaceOverview } from "../Overview/WorkspaceOverview";
import { WorkspaceBoard } from "../Board/WorkspaceBoard";
import { CreateWorkspaceModal } from "../Modals/CreateWorkspaceModal";






export default function WorkspaceTabs(){

    const userId = useAppSelector((state)=> state.global.userDetails?.data?.id);

    const {data} = GetWorkspaceQuery(userId);

    return(
        <Tabs defaultValue={'overview'}>
            <TabsList className="w-full flex px-6 justify-between">
                <div>
                    <TabsTrigger value="overview">
                        <SquareKanban />
                        <span>Overview</span>
                    </TabsTrigger>
                    <TabsTrigger value="board">
                        <Kanban />
                        <span>Board</span>
                    </TabsTrigger>
                </div>
                <div>
                    <CreateWorkspaceModal/>
                </div>
            </TabsList>
            <TabsContent value="overview">
                <WorkspaceOverview  data={data?.data ? data.data.data.result : []}/>
            </TabsContent>
            <TabsContent value="board">
                <WorkspaceBoard data={data?.data ? data.data.data.result : []} />
            </TabsContent>
        </Tabs>
    )
}