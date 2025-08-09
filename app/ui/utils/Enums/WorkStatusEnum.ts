export enum WorkStatusEnum{
    DRAFT = "DRAFT",
    ASSIGNED = "ASSIGNED",
    INPROGRESS = "INPROGRESS",
    INREVIEW = "INREVIEW",
    REASSIGNED = "REASSIGNED",
    COMPLETED = "COMPLETED"
}



export const WorkStatusColor: Record<string,string> = {
    "INPROGRESS": "#E16B16",
    "DRAFT" : "#FDAA34",
    "ASSIGNED" : "#1290E0",
    "INREVIEW" : "#FDCC0D",
    "REASSIGNED" : "#1358D0",
    "COMPLETED" : "#1DB82B"
}
export const WorkStatusTextColor: Record<string,string> = {
    "INPROGRESS": "#001F29",
    "DRAFT" : "#5B00BD",
    "ASSIGNED" : "#000000",
    "INREVIEW" : "#000000",
    "REASSIGNED" : "#D8F8FF",
    "COMPLETED" : "#000406"
}