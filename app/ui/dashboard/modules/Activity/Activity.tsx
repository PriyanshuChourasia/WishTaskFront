import BottomBorder from "@/app/ui/shared/Components/Border/BottomBorder";
import ActivityTabs from "./components/Tabs/ActivityTabs";




export default function Activity(){


    return(
        <div className="py-2 px-8">
            <h1 className="text-base dark:text-white font-semibold">Activity</h1>
            <BottomBorder/>

            <div className="py-5">
                <ActivityTabs/>
            </div>
        </div>
    )
}