import { Button } from "@/components/ui/button";
import { PiMicrosoftExcelLogoBold } from "react-icons/pi";


export default function ImportExcelButton(){

    const handleImportExcel = ()=>{
        
    }

    return(
        <Button onClick={()=> handleImportExcel()}>
            <PiMicrosoftExcelLogoBold />
            <span>Import Excel</span>
        </Button>
    )
}