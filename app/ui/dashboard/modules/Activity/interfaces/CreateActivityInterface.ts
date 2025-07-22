
export enum ActivityStatus{
    DRAFT = 'DRAFT',
    ASSIGNED = 'ASSIGNED',
    INPROGRESS = 'INPROGRESS',
    INREVIEW = 'INREVIEW',
    REASSIGNED = 'REASSIGNED',
    COMPLETED = 'COMPLETED'
}


export interface ICreateAcitivityInterface{
    name:string,
    topic:string,
    description:string,
    startTime?:string;
    endTime?:string;
    status: ActivityStatus;
    user_id:string;
}