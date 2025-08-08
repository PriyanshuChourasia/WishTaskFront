"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ITaskResponse } from "../../../interfaces/TaskResponse"


interface BoardCardInterface{
    data: ITaskResponse
}


export const BoardCard: React.FC<BoardCardInterface> = ({data}) =>{


    return(
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>
                    <div className="flex justify-between mb-2">
                        <h1>{data.name}</h1>
                        <div>{data.status}</div>
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