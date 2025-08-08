"use client";
import { Briefcase, ChevronDown, ChevronUp, Folder, FolderOpen, Grid3x2, House, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../redux";
import { setIsSidebarCollapsed } from "../../redux/global";
import SidebarLink from "./SidebarLinks";
import {LayoutDashboard, ClipboardCheck, UsersRound} from "lucide-react";
import { useEffect, useState } from "react";
import { GetWorkspaceQuery } from "../modules/Workspaces/hooks/GetWorkspaceQuery";
import { setWorkspaces } from "../modules/Workspaces/state";
import { PiUsersThree } from "react-icons/pi";




export default function Sidebar(){

    const userId = useAppSelector((state)=> state.global.userDetails?.data?.id);

    const {data,isSuccess} = GetWorkspaceQuery(userId);

    const [showWorkspaces,setShowWorkspaces] = useState<boolean>(false);
    const [teams,setTeams] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state)=> state.global.isSidebarCollapsed);

    const sidebarClassName=`fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 ease-out h-full z-[50] dark:bg-black dark:text-white overflow-y-auto bg-white 
    ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}
    `;

    useEffect(()=>{
        if(isSuccess){
            console.log("data",data);
            dispatch(setWorkspaces(data.data));
        }
    },[data,isSuccess]);
    return(
        <aside className={sidebarClassName}>
            <div className="flex h-[100%] w-full  flex-col justify-start ">
                {/* Top Logo */}
                <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
                    <div className="text-xl font-bold text-gray-800 dark:text-white">
                        <span className="text-sm">WishAlpha</span>
                    </div>
                    {
                        isSidebarCollapsed ? null : (
                            <button className="py-3" onClick={() => {dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}}>
                                <X className="h-6 w-6 cursor-pointer text-gray-900 hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-50" />
                            </button>
                        )
                    }
                </div>
                <div className="mb-5 border-[1px] dark:border-gray-400" />
                {/* Teams Information */}

                {/* Sidebar Links */}
                <div className="px-2">
                    <SidebarLink href="/dashboard" name="Dashboard" icon={LayoutDashboard} />
                    <SidebarLink href="/dashboard/activity" name="Activity" icon={ClipboardCheck} />
                    <SidebarLink href="/dashboard/tasks" name="Task" icon={ClipboardCheck} />
                    <SidebarLink href="/dashboard/users" name="Users" icon={UsersRound} />
                    {/* <SidebarLink href="/dashboard/workspace" name="WorkSpaces" icon={ClipboardCheck} /> */}
                    
                    {/* Workspaces */}
                    <div onClick={()=> setShowWorkspaces(!showWorkspaces)} className="flex items-center cursor-pointer pl-4 gap-2 py-2">
                        <Briefcase size={20} />
                        <span>Workspaces</span>
                        {showWorkspaces ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                    </div>
                    {
                        showWorkspaces && 
                        <div className="pl-5">
                            <SidebarLink href="/dashboard/workspaces" name="Home" icon={House} />
                            {
                                data?.data && data.data.data.result.map((item,index)=>(
                                    <SidebarLink 
                                        key={index} href={`/dashboard/workspaces/${item.id}`} 
                                        name={item.name} 
                                        icon={item.viewMode === "PUBLIC" ? FolderOpen  : Folder}
                                        iconColor={`${item.viewMode === "PUBLIC" ? "#00c951" : "#fb2c36"}`}
                                    />
                                ))
                            }
                        </div>
                    }
                    {/* Teams */}
                    <div onClick={()=> setTeams(!teams)} className="flex items-center cursor-pointer pl-4 gap-2 py-2">
                        <PiUsersThree size={20} />
                        <span>Teams</span>
                        {teams ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                    </div>
                    {
                        teams && 
                        <div className="pl-5">
                            <SidebarLink href="/dashboard/teams" name="Home" icon={House} />
                            {/* {
                                data?.data && data.data.data.result.map((item,index)=>(
                                    <SidebarLink key={index} href={`/dashboard/workspaces/${item.id}`} name={item.name} icon={item.viewMode === "PUBLIC" ? FolderOpen  : Folder} />
                                ))
                            } */}
                        </div>
                    }
                </div>

            </div>
        </aside>
    )
}