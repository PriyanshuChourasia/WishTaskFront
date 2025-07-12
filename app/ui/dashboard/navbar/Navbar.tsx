import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Settings, User, Users } from "lucide-react";



export default function Navbar(){
    return(
        <nav className="flex sticky top-0 z-50 items-center justify-between bg-white pl-6 pr-8 py-3 dark:bg-black">
            {/* Search Bar */}
            <div className="flex items-center gap-8">

            </div>

            {/* Icons */}
            <div className="flex items-center gap-3">
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
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    )
}