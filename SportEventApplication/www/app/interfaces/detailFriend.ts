import { Address } from './address';

export interface DetailFriend {
    Id : number,
    FullName : string;
    Email: string;
    UserName :string;
    Adress : Address;
    IsFriend : boolean;
    Since : Date;
} 