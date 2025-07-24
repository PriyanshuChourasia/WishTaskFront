import { FolderKanban } from "lucide-react";
import { IWorkSpaceInterface } from "../../interfaces/CreateWorkspaceInterface"
import { BoardCard } from "./components/BoardCard";


interface WorkspaceBoardInterface{
    data: IWorkSpaceInterface[];
}



export const WorkspaceBoard: React.FC<WorkspaceBoardInterface> = ({data}) =>{

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
        <div className="px-4 py-2 flex gap-4 justify-evenly">
            {
                data.map((item,index)=>(
                    <BoardCard key={index} data={item} />
                ))
            }
        </div>
    )
}