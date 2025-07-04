import LoginForm from "./components/LoginForm";




export default function Login(){

    


    return(
        <div className="py-8 px-6 grid grid-cols-2">
            <div className="py-6 px-4">
                <div className="flex justify-center flex-col">
                    <h1 className="text-4xl mb-4 font-semibold text-center dark:text-white text-black">Welcome Back</h1>
                    <span className="text-center">
                        Simplify your workflow and boost your productivity with WishAlpha App. Get started for free.
                    </span>
                </div>
                <LoginForm/>
            </div>
            <div>

            </div>
        </div>
    )
}