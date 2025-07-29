"use client";
import { GetWorkspaceDetailById } from "../../hooks/GetWorkspaceDetailById"
import { WorkspaceDetail } from "../../initialstate/WorkspaceDetailnitialstate";
import { Project } from "../Projects/Project";
import { WorkspaceHeader } from "./components/WorkspaceHeader";


interface DynamicWorkspaceInterface{
    workspaceId:string
}



export const DynamicWorkspace: React.FC<DynamicWorkspaceInterface> = ({workspaceId}) => {

    const {data,isFetching,isSuccess} = GetWorkspaceDetailById(workspaceId);

    return(
        <div className="px-4 py-4">
            <WorkspaceHeader data={data?.data ? data.data.data.result : WorkspaceDetail} isLoading={isFetching} />
            <Project/>
        </div>
    )
}