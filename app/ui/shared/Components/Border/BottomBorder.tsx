

interface BottomBorderInterface{
    color?:string
}


const BottomBorder: React.FC<BottomBorderInterface> = ({color}) =>{
    return(
        <div className={`border-b-2 w-1/5 mt-1 ${color ? color : "border-gray-800 dark:border-gray-300"}`} />
    )
}

export default BottomBorder;