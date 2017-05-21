import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import {Account} from './account.interface';


@Injectable()

export class AccountService {

    constructor(private http: Http) { }


    postAccount(account: Account){
        console.log("POSSST!!!")
         let headers = new Headers({ 'Content-Type': 'application/json' });
         let options = new RequestOptions({ headers: headers });
         let body = JSON.stringify(account);

    return this.http.post("http://localhost:61957/api/SignUpAccount", body, options).map(res => res.json()).toPromise();
    }

     getAccounts() {
       return this.http.get('http://localhost:61957/api/SignUpAccount')
                   .map(res => res.json()).toPromise();

    }

    getAccount(id) {
        return this.http.get('http://localhost:61957/api/Account/'+id)
                   .map(res => res.json()).toPromise();
    }

    getInterests(id) {
        return this.http.get('http://localhost:61957/api/Account/GetMySportInterest/'+id)
                   .map(res => res.json()).toPromise();
    }

    getCreatedSportEvents(pageSize,pageNumber,id) {
        return this.http.get('http://localhost:61957/api/Account/GetCreatedSportEvents/'+pageSize + '/' 
                                + pageNumber + '/' +id)
                   .map(res => res.json()).toPromise();
    }

    getGoingSportEvents(pageSize,pageNumber,id) {
        return this.http.get('http://localhost:61957/api/Account/GetGoingSportEvents/'+pageSize + '/' 
                                + pageNumber + '/' +id)
                   .map(res => res.json()).toPromise();
    }

    getSignUpAccount(id) {
        return this.http.get('http://localhost:61957/api/SignUpAccount/'+id)
                   .map(res => res.json()).toPromise();
    }

    editAccount(account) {
         let headers = new Headers({ 'Content-Type': 'application/json' });
         let options = new RequestOptions({ headers: headers });
         let body = JSON.stringify(account);

    return this.http.put("http://localhost:61957/api/SignUpAccount", body, options).map(res => res.json()).toPromise();
    }

}