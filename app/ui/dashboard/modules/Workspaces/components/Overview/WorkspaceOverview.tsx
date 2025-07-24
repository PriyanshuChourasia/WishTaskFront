import { FolderKanban } from "lucide-react";
import { IWorkSpaceInterface } from "../../interfaces/CreateWorkspaceInterface"

interface WorkspaceOverviewProps{
    data: IWorkSpaceInterface[];
}




export const WorkspaceOverview: React.FC<WorkspaceOverviewProps> = ({data}) =>{

    if(data.length < 1){
        return(
            <div className="min-h-[80vh] flex justify-center items-center">
                <div className=" flex flex-col items-center justify-center">
                    <FolderKanban />
                     <p className="text-sm text-gray-700">No Workspace Created</p>
                </div>
               
            </div>
        )
    }

    return(
        <div>
        </div>
    )
}