export interface SportEvent {
    Id : number;
    Title : string;
    Date : string;
    Description : string;
    Category: {
        Name: string;
    };
    Owner : {
        Id: number;
        FullName:string;
        UserName:string;
        Adress : {
            I
            address: string;
            latitude :number;
            longitude: number;
        }
    };
    Adress : {
        address: string;
        latitude: number;
        longitude: number;      
    }
    
}