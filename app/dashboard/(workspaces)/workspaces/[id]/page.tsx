import { use } from 'react';

interface Params {
  params: {
    id: string;
  };
}



export default function Page({params}:Params){
    return (
        <div>WorkSpace ID {params.id} </div>
    )
}