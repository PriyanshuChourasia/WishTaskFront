import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ViewModeStatus } from "../../../interfaces/CreateWorkspaceInterface";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { UpdateViewStatusMutation } from "../../../hooks/UpdateViewStatusMutation";
import { X } from "lucide-react";


interface UpdateViewStatusInterface{
    viewMode: string;
    id:string
}


export const UpdateViewStatus: React.FC<UpdateViewStatusInterface> = ({viewMode,id}) =>{


    const {mutate,isPending} = UpdateViewStatusMutation();
    const [open,setOpen] = useState<boolean>(false);


    const handleViewStatus = () =>{

        mutate({
            id:id,
            viewMode: ViewModeStatus.PUBLIC === viewMode ? ViewModeStatus.PRIVATE : ViewModeStatus.PUBLIC
        });
        setTimeout(() => {
            setOpen(!open);
        }, 800);
       
    }


    return(
        <Dialog open={open}>
            <DialogTrigger>
                <Button asChild className={`${ViewModeStatus.PUBLIC == viewMode ? "!bg-green-500":"!bg-red-500"}`}>
                    <Badge onClick={()=> setOpen(!open)} variant={"outline"} className={`${ViewModeStatus.PUBLIC == viewMode ? "bg-green-500" : "bg-red-500"} text-gray-50 text-[12px]`}>{viewMode}</Badge>
                </Button>
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
                <div className="flex items-center justify-between">
                    <div>
                        <DialogHeader>
                            <DialogTitle>View Status</DialogTitle>

                        </DialogHeader>
                    </div>
                    <div>
                        <DialogClose asChild>
                            <X onClick={()=> setOpen(!open)} />
                        </DialogClose>
                    </div>
                </div>
                <DialogDescription>
                    Are you confirm? You want to change visibility of workspace. It can affect your project
                </DialogDescription>
                
                    <div className="flex gap-4">
                        <h1>{viewMode}</h1>
                        <Switch disabled={isPending} checked={ViewModeStatus.PUBLIC == viewMode ? true : false} onCheckedChange={handleViewStatus}  />
                    </div>
            </DialogContent>
        </Dialog>
    )
}