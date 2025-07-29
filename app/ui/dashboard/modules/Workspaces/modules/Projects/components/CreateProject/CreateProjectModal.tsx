"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";




export default function CreateProjectModal(){
    const [open,setOpen] = useState<boolean>(false);

    return(
        <Dialog open={open}>
            <DialogTrigger asChild>
                <Button variant={"outline"} onClick={()=> setOpen(!open)} className="!bg-[#2464e5] ">
                    <Plus />
                    Create Project
                </Button>
            </DialogTrigger>
            <DialogContent className="dark:text-white">
                <DialogHeader>
                    <DialogTitle>Create Activity</DialogTitle>
                </DialogHeader>
                {/* Modal Body */}
                <div className="py-4">
                </div>
            </DialogContent>
        </Dialog>
    )
}