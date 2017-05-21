import { SimpleAccount } from './simple-account';

export interface Message {
    Id : number,
    Text : string,
    User : SimpleAccount,
    Date : Date
    ConversationId : number
} 