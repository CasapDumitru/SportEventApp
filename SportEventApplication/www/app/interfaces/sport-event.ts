import { Sport } from './sport';
import { Account } from './account';
import { Address } from './address';

export interface SportEvent {
    Id : number;
    Title : string;
    Date : string;
    Description : string;
    Category: Sport;
    Owner : Account;
    Adress : Address;
    ImagePath : String;
    ImageBase64 : String;
} 