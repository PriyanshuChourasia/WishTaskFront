"use client";
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import { useState } from "react"
import CreateWorkspaceForm from "./CreateWorkspaceForm";



export const CreateWorkspaceModal = () =>{

    const [open,setOpen] = useState<boolean>(false);

    return(
        <Dialog open={open}>
            <DialogTrigger asChild>
                <Button className="cursor-pointer" onClick={()=> setOpen(!open)}>
                    <Plus size={19}/>
                    <span>Create</span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Workspace</DialogTitle>
                </DialogHeader>
                <div className="py-2 px-4">
                    <CreateWorkspaceForm setOpen={setOpen}/>
                </div>
                <DialogFooter>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}