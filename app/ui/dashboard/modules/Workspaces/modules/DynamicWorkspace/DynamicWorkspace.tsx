"use client";
import { GetWorkspaceDetailById } from "../../hooks/GetWorkspaceDetailById"
import { WorkspaceDetail } from "../../initialstate/WorkspaceDetailnitialstate";
import WorkspaceBody from "./components/WorkspaceBody";
import { WorkspaceHeader } from "./components/WorkspaceHeader";
import WorkspaceNav from "./components/WorkspaceNav";


interface DynamicWorkspaceInterface{
    workspaceId:string
}



export const DynamicWorkspace: React.FC<DynamicWorkspaceInterface> = ({workspaceId}) => {

    const {data,isFetching} = GetWorkspaceDetailById(workspaceId);

    return(
        <div className="px-4 py-4">
            <WorkspaceNav data={data?.data ? data.data.data.result : WorkspaceDetail}  isLoading={isFetching} />
            <WorkspaceHeader/>
            <WorkspaceBody/>
        </div>
    )
}