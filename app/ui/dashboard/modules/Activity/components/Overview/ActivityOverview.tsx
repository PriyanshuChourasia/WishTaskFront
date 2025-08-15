import { ClipLoader } from "react-spinners"
// import { ActivityResponse } from "../../interfaces/ActivityResponseInterface"



interface BoardViewProps{
  // data: ActivityResponse[],
  isLoading: boolean,
}



export const ActivityOverview: React.FC<BoardViewProps> = ({isLoading}) => {

  if(isLoading){
      return(
        <div className="h-[70vh] flex items-center justify-center">
          <ClipLoader />
        </div>
      )
    }


  return (
    <div>ActivityOverview</div>
  )
}
