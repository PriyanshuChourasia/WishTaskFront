



interface Params{
    params:{
        id:string
    }
}


export default function Page({params}:Params){
    return(
        <div>Team ID {params.id}</div>
    )
}