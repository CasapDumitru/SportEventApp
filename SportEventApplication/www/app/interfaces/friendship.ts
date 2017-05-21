import { SimpleAccount } from './simple-account';

export interface Friendship {
    Id : number,
    UserOne : SimpleAccount,
    UserTwo : SimpleAccount,
    Since : Date
} 