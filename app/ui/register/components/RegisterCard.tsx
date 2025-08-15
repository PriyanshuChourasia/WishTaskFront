import { RegisterForm } from "./RegisterForm"





export const RegisterCard = () =>{
    return(
        <div className="grid grid-cols-1 bg-white md:grid-cols-2 w-full max-w-5xl rounded shadow-md shadow-gray-600  border-[1px] border-gray-200">
            <div className="py-8 px-6">
                <div className="text-center mb-4">
                    <h1 className="font-bold text-3xl">Welcome Register</h1>
                    <h3 className="font-light text-md">Register with us.</h3>
                </div>
                <div>
                    <RegisterForm/>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img src={"/Register.jpg"} className="w-full h-full object-cover rounded" />
            </div>
        </div>
    )
}