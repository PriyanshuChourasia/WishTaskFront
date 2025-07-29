"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react";
import { useState } from "react"
import { PiUsersThree } from "react-icons/pi";



export const CreateTeam = () =>{

    const [open,setOpen] = useState<boolean>(false);

    return(
        <Dialog open={open}>
            <DialogTrigger asChild>
                <Button onClick={()=> setOpen(!open)} className="!bg-[#1f87ff] cursor-pointer !py-2 !px-4">Create <PiUsersThree size={18} /> </Button>
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
                <DialogHeader>
                    <div className="flex items-center justify-between">
                        <DialogTitle>Create Team</DialogTitle>
                        <X onClick={() => setOpen(!open)} size={18}/>
                    </div>
                </DialogHeader>
                <div>
                    <h1>Create Team</h1>
                </div>
            </DialogContent>
        </Dialog>
    )
}