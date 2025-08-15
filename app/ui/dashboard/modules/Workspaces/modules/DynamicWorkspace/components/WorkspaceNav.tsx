import { Info } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface WorkspaceHeader{
    data:{
        id:string,
        name:string,
        noOfProjects: number,
        viewMode: string,
        shared: boolean,
        createdBy:string,
        createdAt:string
    },
    isLoading:boolean
}




export default function WorkspaceNav({data}:WorkspaceHeader){

    const pathName = usePathname();
    
    const pathId = pathName.split('/');
    const id = pathId[pathId.length - 1];

    return(
        <>
            <div className="w-full flex xs:flex-row flex-wrap gap-4 items-center justify-between px-4 py-2 rounded-md border-2 border-gray-200 hover:border-gray-600 transition-all duration-200 ease-in shadow-sm hover:shadow-xl ">
                <div className="flex flex-col items-center">
                    <h1 className="font-semibold">Workspace</h1>
                    <p>{data.name}</p>
                </div>
                <div className="md:flex hidden flex-col items-center">
                    <h1 className="font-semibold">View Mode</h1>
                    <p className={`${data.viewMode == "PUBLIC" ? "text-green-600" : "text-red-600"}`} >{data.viewMode}</p>
                </div>
                {/* <div className="flex flex-col items-center">
                    <h1 className="font-semibold">Shared</h1>
                    <p>{data.shared ? "TRUE" : "FALSE"}</p>
                </div> */}
                <div className="md:flex hidden flex-col items-center">
                    <h1 className="font-semibold">No Of Projects</h1>
                    <p>{data.noOfProjects}</p>
                </div>
                <div className="md:flex hidden flex-col items-center">
                    <h1 className="font-semibold">Created At</h1>
                    <p>{new Date(data.createdAt).toLocaleDateString([],{day:'2-digit',month:'short',year:'2-digit',hour12:false,hour:'2-digit',minute:'2-digit'})}</p>
                </div>
                <Link href={`/dashboard/workspaces/${id}/info`}>
                    <Info size={24} className="cursor-pointer" />
                </Link>
            </div>
        </>
    )
}