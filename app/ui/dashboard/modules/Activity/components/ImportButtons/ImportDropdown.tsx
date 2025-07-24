import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FolderDown } from "lucide-react";
import ImportExcelButton from "./ImportExcelButton";



export default function ImportDropdown(){
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'}>
                    <FolderDown />
                    <span>Imports</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <ImportExcelButton/>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}