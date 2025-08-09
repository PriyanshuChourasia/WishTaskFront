"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ITaskResponse } from "../../../interfaces/TaskResponse"
import { WorkStatusColor, WorkStatusTextColor } from "@/app/ui/utils/Enums/WorkStatusEnum";
import { Badge } from "@/components/ui/badge";


interface BoardCardInterface{
    data: ITaskResponse
}


export const BoardCard: React.FC<BoardCardInterface> = ({data}) =>{


    return(
        <Card className="w-full mb-3">
            <CardHeader>
                <CardTitle>
                    <div className="flex justify-between mb-2">
                        <h1>{data.name}</h1>
                        <Badge variant={'outline'} style={{color: WorkStatusTextColor[data.status] , backgroundColor: WorkStatusColor[data.status]}} className="underline py-1 font-semibold underline-offset-2">{data.status}</Badge>
                    </div>
                </CardTitle>
                <CardDescription>
                    {data.description}
                </CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
            <CardFooter className="!flex justify-between">
                <div>
                    <h1 className="text-xs font-semibold">Assigned By</h1>
                    <p className="text-xs">{data.assignedBy.name}</p>
                </div>
                <div>
                    <h1 className="text-xs font-semibold">Assigned To</h1>
                    <p className="text-xs">{data.assignedTo.name}</p>
                </div>
            </CardFooter>
        </Card>
    )
}