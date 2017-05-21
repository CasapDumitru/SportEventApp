import { Address } from './address';

export interface SignUpAccount {
    Id : number,
    FirstName : string;
    LastName :string;
    Email: string;
    UserName :string;
    Password: string;
    Adress : Address;
} 