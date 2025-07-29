import { Search } from "lucide-react";
import { CreateTeam } from "../CreateModal/CreateTeam";




export default function TeamHeader(){
    return(
        <div className="grid grid-cols-2 bg-[#dadada89] w-full py-3 px-4">
            <div className="flex items-center px-2 border-2 bg-white rounded-sm border-gray-600 focus-within:border-gray-800">
                <Search size={16}/>
                <input type="search" className="border-0 py-2 bg-white text-sm outline-0 w-full focus:outline-none px-4" placeholder="Search...." />
            </div>
            <div className="flex justify-end">
                <CreateTeam/>
            </div>
        </div>
    )
}