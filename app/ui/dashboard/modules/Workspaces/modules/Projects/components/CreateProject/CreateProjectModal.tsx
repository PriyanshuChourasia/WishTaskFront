"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import CreateProjectForm from "./CreateProjectForm";




export default function CreateProjectModal(){
    const [open,setOpen] = useState<boolean>(false);

    return(
        <Dialog open={open}>
            <DialogTrigger asChild>
                <Button variant={"outline"} onClick={()=> setOpen(!open)} className="!bg-[#2a71ff] !text-white hover:text-white">
                    <Plus />
                    Create Project
                </Button>
            </DialogTrigger>
            <DialogContent showCloseButton={false} className="dark:text-white">
                <DialogHeader>
                    <div className="flex justify-between items-center">
                        <DialogTitle>Create Project</DialogTitle>
                        <X className="cursor-pointer" onClick={()=> setOpen(!open)} />
                    </div>
                </DialogHeader>
                {/* Modal Body */}
                <div className="py-4 overflow-hidden">
                    <CreateProjectForm setOpen={setOpen} />
                </div>
            </DialogContent>
        </Dialog>
    )
}