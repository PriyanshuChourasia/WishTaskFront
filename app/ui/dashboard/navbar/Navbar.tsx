"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogOut, Menu, Moon, Search, Settings, Sun, User, Users } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../redux";
import { setIsDarkMode, setIsSidebarCollapsed, setUserDetails } from "../../redux/global";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { UserDetailInitialState } from "../../shared/intialstate/UserDetailInitialState";



export default function Navbar(){

    const router = useRouter();
    const dispatch = useAppDispatch();
    const isSidebarCollapsed  = useAppSelector((state)=> state.global.isSidebarCollapsed);
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    const handleLogout = ()=>{
        dispatch(setUserDetails(UserDetailInitialState));
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
        router.replace("/login");
    }

    return(
        <nav className="flex sticky top-0 z-50 items-center justify-between bg-white pl-6 pr-8 py-3 dark:bg-black">
            {/* Search Bar and bar */}
            <div className="flex items-center gap-8">
                {
                    !isSidebarCollapsed ? null :
                    (
                        <button onClick={()=> dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}>
                            <Menu className="h-8 w-8 cursor-pointer dark:text-white" />
                        </button>
                    )
                }
                <div className="relative flex h-min w-[200px]">
                    <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
                    <input type="search" placeholder="Search...." className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder:text-gray-500 focus:border-transparent dark:text-white dark:bg-gray-800 dark:placeholder-white" />
                </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-3">
                <button onClick={()=> dispatch(setIsDarkMode(!isDarkMode))}
                    className={`${isDarkMode ? 'rounded p-2 dark:hover:bg-gray-700' : 'rounded p-2 hover:bg-gray-100'} cursor-pointer`}>
                    {
                        isDarkMode ? (
                            <Sun className="h-6 w-6 dark:text-white" />
                        )
                        :
                        (
                            <Moon className="h-6 w-6 dark:text-white" />
                        )
                    }
                </button>
                <div className="ml-2 mr-2 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block" />
                <div className="pr-6">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar className="cursor-pointer">
                                <AvatarImage src={"https://github.com/shadcn.png"} />
                                <AvatarFallback>Image</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>
                                <User className="w-5 h-5"/>
                                <span className="font-medium dark:text-white text-black">Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="w-5 h-5"/>
                                <span className="font-medium text-black dark:text-white">Settings</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Users className="w-5 h-5"/>
                                <span className="font-medium text-black dark:text-white">Teams</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleLogout}>
                                <LogOut className="w-5 h-5 text-red-600"/>
                                <span className="font-medium text-black dark:text-white">Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    )
}