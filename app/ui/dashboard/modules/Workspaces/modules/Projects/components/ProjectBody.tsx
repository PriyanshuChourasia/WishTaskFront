import { useAppSelector } from "@/app/ui/redux";
import { GetProjectByWorkspaceId } from "../hooks/GetProjectByWorkspaceId"




export default function ProjectBody(){

    const workspaceId = useAppSelector((state)=> state.projectData.workspaceId);

    const {data,isLoading} = GetProjectByWorkspaceId(workspaceId);

    return(
        <div className="py-4 px-2">

        </div>
    )
}