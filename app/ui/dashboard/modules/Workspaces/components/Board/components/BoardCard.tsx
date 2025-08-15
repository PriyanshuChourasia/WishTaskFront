"use client"
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IWorkSpaceInterface } from "../../../interfaces/CreateWorkspaceInterface"
import { UpdateViewStatus } from "./UpdateViewStatus";


interface BoardCardInterface{
    data: IWorkSpaceInterface;
}


export const BoardCard: React.FC<BoardCardInterface> = ({data}) =>{
    return(
        <Card className="overflow-hidden w-2/3 cursor-pointer">
            <CardHeader>
                <CardTitle>{data.name}</CardTitle>
                <CardAction>
                    <UpdateViewStatus viewMode={data.viewMode} id={data.id} />
                </CardAction>
            </CardHeader>
            <CardContent>
                {data.viewMode}
            </CardContent>
            <CardFooter>
                <span>{data.createdAt}</span>
            </CardFooter>
        </Card>
    )
}