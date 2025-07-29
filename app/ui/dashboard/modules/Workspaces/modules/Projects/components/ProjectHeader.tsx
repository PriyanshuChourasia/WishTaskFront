import { Button } from "@/components/ui/button"
import { Plus, Search } from "lucide-react"



export const ProjectHeader = () =>{
    return(
        <div className="py-3 px-2 w-full grid grid-cols-2">
            <div>
                <div className="border-[1px] flex px-2 rounded-md items-center border-gray-700 focus-within:border-gray-900">
                    <Search size={18}/>
                    <input type="search" className="outline-none pl-2 w-full border-none py-2" placeholder="Search project...." />
                </div>
            </div>
            <div className="flex items-center justify-end">
                
            </div>
        </div>
    )
}