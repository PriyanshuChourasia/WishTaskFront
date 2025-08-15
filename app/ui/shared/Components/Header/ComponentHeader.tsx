import { JSX } from "react"




export function Component2GridHeader({children,className}:{children:JSX.Element,className?:string}){
    return(
        <div className={`py-3 px-2 shadow-lg my-4 mt-6 rounded-lg w-full grid grid-cols-2 ${className}`}>
            {children}
        </div>
    )
}