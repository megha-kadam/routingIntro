export interface Iuser{
    userName: string;
    userRole: "Admin" | "Candidate" | "Super Admin";
    userId : string
}