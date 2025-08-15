"use client";
import { DynamicWorkspace } from '@/app/ui/dashboard/modules/Workspaces/modules/DynamicWorkspace/DynamicWorkspace';
import { setWorkspaceId } from '@/app/ui/dashboard/modules/Workspaces/modules/Projects/state';
import { useAppDispatch } from '@/app/ui/redux';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';



export default function Page(){

  const dispatch = useAppDispatch();
  const pathName = usePathname();
  
  const pathId = pathName.split('/');
  const Id = pathId[pathId.length - 1];

  useEffect(()=>{
    if(Id){
      dispatch(setWorkspaceId(Id));
    }
  },[Id,dispatch]);

  return (
      <div>
        <DynamicWorkspace workspaceId={Id} />
      </div>
  )
}