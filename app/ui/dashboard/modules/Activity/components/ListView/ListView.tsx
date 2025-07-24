import { ActivityResponse } from "../../interfaces/ActivityResponseInterface";
import { ListCard } from "./components/ListCard";


interface ListViewProps{
  data: ActivityResponse[],
}



export const ListView: React.FC<ListViewProps> = ({data}) => {


  return (
    <div className="py-4 px-4">
        {
          data.map((item,index)=>(
            <div key={index} className="mb-2 bg-gray-200 rounded-lg">
              <ListCard name={item.name} topic={item.topic} description={item.description} startTime={item.startTime} endTime={item.endTime} createdAt={item.createdAt} status={item.status} />
            </div>
          ))
        }
    </div>
  )
}
