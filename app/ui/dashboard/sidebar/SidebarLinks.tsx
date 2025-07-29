import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"


interface SidebarLinkProps{
    icon: LucideIcon;
    name: string;
    href: string;
    iconColor?:string
}



export default function SidebarLink({name,href,iconColor,icon:Icon}:SidebarLinkProps){

    const pathname = usePathname();
    console.log("pathname: ",pathname);

    return(
        <div className={`pr-4 pl-4 py-3  transition-all duration-200 ease-in-out  ${pathname == href ? 'border-l-4 border-l-sky-600 bg-gray-200 dark:text-white rounded-sm text-black font-semibold dark:bg-gray-700' : ''}`}>
            <Link href={href} className="flex items-center gap-2">
                <span className="m-0">{<Icon size={20} color={iconColor} />}</span>
                <span className="m-0 text-sm">{name}</span>
            </Link>
        </div>
    )
}