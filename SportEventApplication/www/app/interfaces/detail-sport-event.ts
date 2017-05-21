import { Sport } from './sport';
import { Account } from './account';
import { Address } from './address';
import { SimpleAccount } from './simple-account';

export interface DetailSportEvent {
    Id : number;
    Title : string;
    Date : string;
    Description : string;
    Category: Sport;
    Owner : Account;
    Adress : Address;
    Attendees : SimpleAccount[];
    Going : boolean;
    ImagePath : string;
    ImageBase64 : String;
}  
