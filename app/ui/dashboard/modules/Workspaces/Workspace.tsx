import BottomBorder from "@/app/ui/shared/Components/Border/BottomBorder";
import WorkspaceTabs from "./components/Tabs/WorkspaceTabs";




export default function Workspace(){

 

    return(
        <div className="py-2 px-2">
            <h1 className="dark:text-white text-base font-semibold">WorkSpace</h1>
            <BottomBorder/>
            <div className="py-4">
                <WorkspaceTabs/>
            </div>
        </div>
    )
}