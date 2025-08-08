import { Funnel } from "lucide-react"
import { CreateTask } from "../CreateTask"




export const TaskIcons = () =>{
    return(
        <div className="w-full flex gap-3 justify-end items-center px-4">
            <CreateTask/>
            <Funnel className="w-5 h-5  dark:text-white cursor-pointer" />
        </div>
    )
}