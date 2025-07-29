import BottomBorder from "@/app/ui/shared/Components/Border/BottomBorder"
import TeamHeader from "./components/Header/TeamHeader"




export const Teams = () =>{
    return(
        <div className="py-4 px-4">
            <h1>Teams</h1>
            <BottomBorder/>
            <TeamHeader/>
        </div>
    )
}