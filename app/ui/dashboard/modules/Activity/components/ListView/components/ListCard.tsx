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
        <div className="dark:bg-black flex justify-between px-4 py-3">
            {/* Status & Name & Topic */}
            <div>
                <Badge style={{backgroundColor: ActivityStatusColor[status]}} className="text-sm">{status}</Badge>
                <h1 className="font-semibold dark:text-white">{name}</h1>
                <h2 className="font-medium dark:text-white">{topic}</h2>
            </div>

            {/* Description */}
            <div>
                <p className="text-sm dark:text-white">{description}</p>
            </div>

            {/* Created At & start Time & end Time */}
            <div>

            </div>
        </div>
    )
}