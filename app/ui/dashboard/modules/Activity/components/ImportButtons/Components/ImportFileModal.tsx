"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { PiMicrosoftExcelLogoBold } from "react-icons/pi";
import { useAppSelector } from "@/app/ui/redux";




export default function ImportExcelFileModal(){

    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    return(
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="outline" className="cursor-pointer border-[#24e554] bg-white text-black dark:bg-[#3ea558be] dark:hover:bg-[#24e554] dark:hover:text-gray-900 dark:text-gray-300">
                   <PiMicrosoftExcelLogoBold className="text-white" size={19} color={isDarkMode ? "white" : '#24e554'} /> Import Excel
                </Button>
            </DialogTrigger>
            <DialogContent className="dark:text-white">
                <DialogHeader>
                    <DialogTitle>Create Activity</DialogTitle>
                </DialogHeader>
                {/* Modal Body */}
                <div className="py-4">
                    <Label htmlFor="picture">Picture</Label>
                    <Input id="picture" type="file" accept=".xlsx, .xls ,(excel file only)" />
                </div>
            </DialogContent>
        </Dialog>
    )
}