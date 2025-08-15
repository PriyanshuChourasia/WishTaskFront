"use client";

// import {  usePathname } from "next/navigation";
import { ProjectHeader } from "./components/Header/ProjectHeader";






export const Project = () =>{

    // const pathUrl = usePathname();
    // const projectId = pathUrl.split('/')[pathUrl.split('/').length - 1];


    return(
        <div className="px-4 py-2 rounded-md">
            <ProjectHeader/>
        </div>
    )
}