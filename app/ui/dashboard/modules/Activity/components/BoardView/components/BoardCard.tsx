

interface BoardCardProps{
    name:string;
    topic:string;
    description:string;
    startTime?:string;
    endTime?:string;
    createdAt?:string;
}


export const BoardCard: React.FC<BoardCardProps> = ({name,description,createdAt}) =>{
    return(
        <div className="py-6 px-2 min-w-[300px] bg-slate-50 mb-2 rounded">
            <div>
                <h2 className="font-semibold text-[15px]">{name}</h2>
            </div>
            {/* Body */}
            <div className="py-5 px-2">
                {description}
            </div>
            {/* Footer */}
            <div className="border-t-[1px] pb-2 border-gray-700">
                <p className="mt-2">{createdAt}</p>
            </div>
        </div>
    )
}