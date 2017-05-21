
export interface Account {
    Id : number,
    FirstName : string;
    LastName : string;
    Email: string;
    UserName :string;
    Password: string;
    Adress : {
        address: string;
        latitude: number;
        longitude: number;      
    }
}