"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import CreateForm from "./CreateForm";
import { useState } from "react";




export default function ActivityCreateModal(){
    const [open,setOpen] = useState<boolean>(false);

    return(
        <Dialog open={open}>
            <DialogTrigger asChild>
                <Button onClick={()=> setOpen(!open)} variant="outline" className="cursor-pointer bg-[#2464e5] text-white hover:bg-[#2464e5d8] hover:text-white">
                   <Plus className="text-white" color="white" /> Create
                </Button>
            </DialogTrigger>
            <DialogContent className="dark:text-white">
                <DialogHeader>
                    <DialogTitle>Create Activity</DialogTitle>
                </DialogHeader>
                {/* Modal Body */}
                <div className="py-4">
                    <CreateForm setOpen={setOpen}/>
                </div>
            </DialogContent>
        </Dialog>
    )
}