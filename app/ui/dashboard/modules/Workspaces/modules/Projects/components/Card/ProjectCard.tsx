"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IProject } from "../../interfaces/ProjectResponse"
import { Info } from "lucide-react"
import { useRouter,useParams } from "next/navigation";


interface ProjectCardInterface{
    data: IProject
}



export const ProjectCard: React.FC<ProjectCardInterface> = ({data}) =>{

    const router = useRouter();
    const params = useParams();
    
    const handleProject = (projectId:string) =>{
        router.push(`${params.id}/${projectId}`)
    }


    return(
        <>
            <Card className="w-full md:max-w-md ">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-center text-lg">{data.name}</CardTitle>
                        <Info onClick={()=> handleProject(data.id)} size={17} className="text-black cursor-pointer" />
                    </div>
                    
                    {/* <CardDescription>
                        {data.topic}
                    </CardDescription> */}
                </CardHeader>
                <CardContent>
                    <div className="min-h-16 h-20 max-h-60">
                        <p>
                            {data.description}
                        </p>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="flex w-full justify-between items-center">
                        <div className="flex flex-col items-center">
                            <h2 className="font-medium">Start Date</h2>
                            <h3>{new Date(data.startDate).toLocaleDateString([],{day:'2-digit',month:'short',year:'2-digit',hour12:false,hour:'2-digit',minute:'2-digit'})}</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="font-medium">Tentative Date</h2>
                            <h3>{new Date(data.dueDate).toLocaleDateString([],{day:'2-digit',month:'short',year:'2-digit',hour12:false,hour:'2-digit',minute:'2-digit'})}</h3>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}