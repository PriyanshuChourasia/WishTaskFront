import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import { CreateForm } from "./CreateForm"
import { useState } from "react"








export const CreateTask = () => {

    const [open,setOpen] = useState<boolean>(false);

    return(
        <Dialog open={open}>
            <DialogTrigger asChild>
                <Button onClick={()=> setOpen(!open)} className="!bg-blue-button dark:text-white cursor-pointer">Create <Plus className="w-4 h-4"/></Button>
            </DialogTrigger>
            <DialogContent showCloseButton={false} className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="dark:text-white">Create Task</DialogTitle>
                </DialogHeader>
                <div className="px-1 py-1">
                    <CreateForm setOpen={setOpen} />
                </div>
            </DialogContent>
        </Dialog>
    )
}