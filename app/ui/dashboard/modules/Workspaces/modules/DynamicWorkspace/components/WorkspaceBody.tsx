"use client";
import { useAppSelector } from "@/app/ui/redux";
import { ProjectCard } from "../../Projects/components/Card/ProjectCard";
import { GetProjectByWorkspaceId } from "../../Projects/hooks/GetProjectByWorkspaceId";




export default function WorkspaceBody(){

    const workspaceId = useAppSelector((state)=> state.projectData.workspaceId);
    
    const {data,isSuccess} = GetProjectByWorkspaceId(workspaceId);

    return(
        <>
            <div className="py-4 flex flex-wrap gap-3 px-2">
                {
                    isSuccess && 
                    data.data.data.result.map((item,index)=>(
                        <ProjectCard key={index} data={item} />
                    ))
                }
            </div>
        </>
    )
}