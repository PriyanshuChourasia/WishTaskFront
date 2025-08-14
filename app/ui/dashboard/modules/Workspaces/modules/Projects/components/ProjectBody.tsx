import { useAppSelector } from "@/app/ui/redux";
import { GetProjectByWorkspaceId } from "../hooks/GetProjectByWorkspaceId"
import { ProjectCard } from "./Card/ProjectCard";




export default function ProjectBody(){

    const workspaceId = useAppSelector((state)=> state.projectData.workspaceId);

    const {data,isLoading,isSuccess} = GetProjectByWorkspaceId(workspaceId);

    return(
        <div className="py-4 flex flex-wrap gap-3 px-2">
            {
                isSuccess && 
                data.data.data.result.map((item,index)=>(
                    <ProjectCard key={index} data={item} />
                ))
            }
        </div>
    )
}