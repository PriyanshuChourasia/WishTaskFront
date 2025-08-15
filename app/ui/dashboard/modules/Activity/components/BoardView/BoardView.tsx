"use client";
import { ActivityResponse } from "../../interfaces/ActivityResponseInterface"
import {ClipLoader} from "react-spinners";
import { ActivityStatus } from "../../interfaces/CreateActivityInterface";
import { BoardCard } from "./components/BoardCard";

import { Badge } from "@/components/ui/badge"


interface BoardViewProps{
  data: ActivityResponse[],
  isLoading: boolean,
}

type GroupedActivity = {
  status: ActivityStatus;
  items: ActivityResponse[];
};

export const ActivityStatusColor={
    DRAFT:'#ffe5a0',
    ASSIGNED: '#d4edbc',
    INPROGRESS: '#ffcfc9',
    INREVIEW: '#bfe1f6',
    REASSIGNED: '#b10202',
    COMPLETED: '#88E788'
}

export const BoardView: React.FC<BoardViewProps> = ({data,isLoading}) => {

  if(isLoading){
    return(
      <div className="max-h-[100vh] bg-amber-600">
        <ClipLoader />
      </div>
    )
  };

  const groupedActivities: GroupedActivity[] = [];

  data.forEach((item) => {
    const group = groupedActivities.find((group) => group.status === item.status);
    if (group) {
      group.items.push(item);
    } else {
      groupedActivities.push({
        status: item.status,
        items: [item],
      });
    }
  });


  return (
    <div className="py-2">
      <div className="flex flex-wrap justify-between gap-6">
        {
          groupedActivities.map((item,index)=>(
            <div key={index} className="py-4 dark:bg-black dark:text-black bg-gray-200 rounded-lg border-gray-500 px-3 min-w-[400px] max-w-[420px]">
              <div className="mb-4">
                <Badge variant={'outline'} style={{backgroundColor:ActivityStatusColor[item.status]}} className={`text-sm dark:text-black`}>{item.status}</Badge>
              </div>
              {
                item.items.map((item,index)=>(
                  <BoardCard
                    key={index}
                    name={item.name} 
                    topic={item.topic} 
                    description={item.description} 
                    createdAt={item.createdAt} 
                    startTime={item.startTime} 
                  />
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}
