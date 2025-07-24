import { Badge } from "@/components/ui/badge";
import { ActivityStatus } from "../../../interfaces/CreateActivityInterface";


interface ListCardProps{
    name:string;
    topic:string;
    description:string;
    startTime?:string;
    endTime?:string;
    createdAt?:string;
    status: ActivityStatus
}

export const ActivityStatusColor={
    DRAFT:'#ffe5a0',
    ASSIGNED: '#d4edbc',
    INPROGRESS: '#ffcfc9',
    INREVIEW: '#bfe1f6',
    REASSIGNED: '#b10202',
    COMPLETED: '#88E788'
}


export const ListCard: React.FC<ListCardProps> = ({name,topic,description,startTime,endTime,createdAt,status}) =>{
    return(
        <div className="dark:bg-black rounded-lg flex flex-wrap px-4 py-3">
            {/* Status & Name & Topic */}
            <div className="space-y-2 w-1/3">
                <Badge style={{backgroundColor: ActivityStatusColor[status]}} className="text-sm text-black">{status}</Badge>
                <h1 className="font-semibold dark:text-white">{name}</h1>
                <h2 className="font-medium dark:text-white">{topic}</h2>
            </div>

            {/* Description */}
            <div className="border-l-2 border-gray-700 px-4 w-1/3">
                <p className="text-sm dark:text-white">{description}</p>
            </div>

            {/* Created At & start Time & end Time */}
            <div className="w-1/3 border-l-2 border-gray-700 px-4 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-4">
                    <h1>CreatedAt:</h1>
                    <span>{createdAt}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <h1>StartTime:</h1>
                    <span>{startTime}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <h1>EndTime:</h1>
                    <span>{endTime}</span>
                </div>
            </div>
        </div>
    )
}