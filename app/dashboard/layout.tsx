"use client";
import { useEffect } from 'react';
import '../globals.css';
import Navbar from '../ui/dashboard/navbar/Navbar';
import Sidebar from '../ui/dashboard/sidebar/Sidebar';
import { useAppDispatch, useAppSelector } from '../ui/redux';


export default function Layout({children}:{children:React.ReactNode}){
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        if(isDarkMode){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    },[isDarkMode]);


    return (
        <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
            {/* Sidebar */}
            <Sidebar/>
            <main className={`flex w-full flex-col bg-gray-50 dark:bg-gray-600 dark:text-white ${isSidebarCollapsed ? "" : "md:pl-64 2xl:pl-64 lg:pl-64"}`}>
                {/* Navbar */}
                <Navbar/>
                <div className='pl-0 pr-0 py-0'>{children}</div>
            </main>
        </div>
    )
}