import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IProject } from "../../interfaces/ProjectResponse"


interface ProjectCardInterface{
    data: IProject
}



export const ProjectCard: React.FC<ProjectCardInterface> = ({data}) =>{
    return(
        <>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>{data.name}</CardTitle>
                    <CardDescription>
                        {data.topic}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <p>
                            {data.description}
                        </p>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col items-center">
                            <h2>Start</h2>
                            <h3>{new Date(data.startDate).toLocaleDateString([],{day:'2-digit',month:'short',year:'2-digit'})}</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2>End</h2>
                            <h3>{new Date(data.dueDate).toLocaleDateString([],{day:'2-digit',month:'short',year:'2-digit'})}</h3>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}