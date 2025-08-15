import { Search } from "lucide-react"
import { CreateProject } from "../../Projects/components/CreateProject/CreateProject"



export const WorkspaceHeader = () =>{



    return(
        <div className="py-3 px-2 shadow-lg my-4 mt-6 rounded-lg w-full grid grid-cols-2">
            <div>
                <div className="border-[1px] flex px-2 rounded-md items-center border-gray-700 focus-within:border-gray-900">
                    <Search size={18}/>
                    <input type="search" className="outline-none pl-2 w-full border-none py-2" placeholder="Search project...." />
                </div>
            </div>
            <div className="flex items-center justify-end">
                <CreateProject/>
            </div>
        </div>
    )
}