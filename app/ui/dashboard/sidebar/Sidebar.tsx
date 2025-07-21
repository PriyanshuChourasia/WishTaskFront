"use client";
import { X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../redux";
import { setIsSidebarCollapsed } from "../../redux/global";
import SidebarLink from "./SidebarLinks";
import {LayoutDashboard, ClipboardCheck, UsersRound} from "lucide-react";




export default function Sidebar(){

    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state)=> state.global.isSidebarCollapsed);

    const sidebarClassName=`fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-[100] dark:bg-black dark:text-white overflow-y-auto bg-white 
    ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}
    `;

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
                    <SidebarLink href="/dashboard/tasks" name="Task" icon={ClipboardCheck} />
                    <SidebarLink href="/dashboard/users" name="Users" icon={UsersRound} />
                </div>

            </div>
        </aside>
    )
}