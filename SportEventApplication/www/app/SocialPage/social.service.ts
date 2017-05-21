import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import { Account } from './../interfaces/account';
import { Message} from './../interfaces/message';

@Injectable()

export class SocialService {

    constructor(private http: Http) { }

    getAccounts() {
       return this.http.get('http://localhost:61957/api/account')
                   .map(res => res.json()).toPromise();
    }

    getFriends(id) {
        return this.http.get('http://localhost:61957/api/friendship/getFriends/'+id)
                   .map(res => res.json()).toPromise();
    }

    getDetailUser(userId,friendId) {
        return this.http.get('http://localhost:61957/api/friendship/getFriendDetail/'+userId + '/' + friendId)
                   .map(res => res.json()).toPromise();
    }
    addFriend(userId,friendId){
         return this.http.get('http://localhost:61957/api/friendship/AddFriend/'+userId + '/' + friendId)
                   .map(res => res.json()).toPromise();
    }
    removeFriend(userId,friendId){
         return this.http.get('http://localhost:61957/api/friendship/RemoveFriend/'+userId + '/' + friendId)
                   .map(res => res.json()).toPromise();
    }
    
    getMessagesByPage(pageSize,pageNumber,userOneId,userTwoId) {
            return this.http.get('http://localhost:61957/api/messenger/GetMessages/'+pageSize + '/' + pageNumber
                    + '/' + userOneId + '/' + userTwoId).map(res => res.json()).toPromise();
    }
    getOrCreateConversation(userOneId,userTwoId) {
            return this.http.get('http://localhost:61957/api/messenger/GetConversation/' + '/' + userOneId + '/' 
                    + userTwoId).map(res => res.json()).toPromise();
    }

    postMessage(message: Message){
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = JSON.stringify(message);

            return this.http.post("http://localhost:61957/api/messenger/SendMessage", body, options).map(res => res.json()).toPromise();
      }
}