export interface ILoginResponse{
    data:{
        access_token:string;
        refresh_token:string;
    },
    success:boolean
}