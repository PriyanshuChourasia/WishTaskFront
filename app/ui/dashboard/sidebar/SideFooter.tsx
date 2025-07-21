import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {Settings} from "lucide-react";


export default function SidebarFooter(){
    return(
        <footer className="w-full">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Settings size={20} />
                    <span className="text-xs font-medium">Settings</span>    
                </DropdownMenuTrigger>
            </DropdownMenu>
        </footer>
    )
}