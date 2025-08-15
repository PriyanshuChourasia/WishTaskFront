import { Search } from "lucide-react";




export default function SearchInput({placeholder}:{placeholder?:string}){
    return(
        <div className="border-[1px] flex px-2 rounded-md items-center border-gray-700 focus-within:border-gray-900">
            <Search size={18}/>
            <input type="search" className="outline-none pl-2 w-full border-none py-2" placeholder={` ${placeholder ? placeholder : "Search......." }`} />
        </div>
    )
}