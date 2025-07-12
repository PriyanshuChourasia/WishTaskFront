import '../globals.css';
import Navbar from '../ui/dashboard/navbar/Navbar';
import Sidebar from '../ui/dashboard/sidebar/Sidebar';


export default function Layout({children}:{children:React.ReactNode}){
    return (
        <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
            {/* Sidebar */}
            <Sidebar/>
            <main className='flex w-full flex-col bg-gray-50 dark:bg-dark-bg'>
                {/* Navbar */}
                <Navbar/>
                <div>{children}</div>
            </main>
        </div>
    )
}