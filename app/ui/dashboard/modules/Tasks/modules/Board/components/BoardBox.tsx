import { useAppSelector } from "@/app/ui/redux"
import { BoardCard } from "./BoardCard";




export const BoardBox = () =>{

    const taskData = useAppSelector((state)=> state.taskResponseData.taskData);

    return(
        <div className="flex flex-wrap gap-2">
            {
                taskData.data.result.map((item,index)=>(
                    <BoardCard key={index} data={item} />
                ))
            }
        </div>
    )
}