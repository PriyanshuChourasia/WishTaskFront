"use client";
import { DynamicWorkspace } from '@/app/ui/dashboard/modules/Workspaces/modules/DynamicWorkspace/DynamicWorkspace';
import { setWorkspaceId } from '@/app/ui/dashboard/modules/Workspaces/modules/Projects/state';
import { useAppDispatch } from '@/app/ui/redux';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';


type Params = {
  params: {
    id: string;
  };
}



export default function Page({params}:Params){

  const dispatch = useAppDispatch();
  const pathName = usePathname();
  
  const pathId = pathName.split('/');
  const Id = pathId[pathId.length - 1];

  useEffect(()=>{
    dispatch(setWorkspaceId(Id));
  },[]);

  return (
      <div>
        <DynamicWorkspace workspaceId={Id} />
      </div>
  )
}