import { DynamicWorkspace } from '@/app/ui/dashboard/modules/Workspaces/modules/DynamicWorkspace/DynamicWorkspace';
import { use } from 'react';

interface Params {
  params: {
    id: string;
  };
}



export default function Page({params}:Params){
    return (
        <div>
          <DynamicWorkspace workspaceId={params.id} />
        </div>
    )
}