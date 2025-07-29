import ProjectBody from "./components/ProjectBody"
import { ProjectHeader } from "./components/ProjectHeader"






export const Project = () =>{
    return(
        <div className="mt-4  rounded-md">
            <ProjectHeader/>
            <ProjectBody/>
        </div>
    )
}