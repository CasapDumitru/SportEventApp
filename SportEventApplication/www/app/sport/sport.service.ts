import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import { Sport } from './sport';


interface Interest {
            id1: number;
            id2: number;
        }

@Injectable()


export class SportService {

    constructor(private http: Http) { }

    interests :Sport[];
    inter: Interest;
     

    getSports() {
       return this.http.get('http://localhost:61957/api/Sport')
                   .map(res => res.json()).toPromise();

    }

    postSport(sport: Sport){
         let headers = new Headers({ 'Content-Type': 'application/json' });
         let options = new RequestOptions({ headers: headers });
         let body = JSON.stringify(sport);

       return this.http.post("http://localhost:61957/api/Sport", body, options).map(res => res.json()).toPromise();
    }


    GetSportInterest(userId) {
       return this.http.get('http://localhost:61957/api/Account/GetSportInterest/'+userId)
                   .map(res => res.json()).toPromise();
    }

    setInterest(userId) {
        this.GetSportInterest(userId).then(
                       inter => {
                            this.interests = inter;
                            console.log("interests=")
                            console.log(this.interests);
                       }).catch(er => console.log(er))
    }

    addInterest(userId,sportId) {     
        this.inter = {
            id1 : userId,
            id2 : sportId
        }
        
         let headers = new Headers({ 'Content-Type': 'application/json' });
         let options = new RequestOptions({ headers: headers });
         let body = JSON.stringify(this.inter);

       return this.http.post("http://localhost:61957/api/Account/AddInterest", body, options).map(res => res.json()).toPromise();            

    }

    removeInterest(userId,sportId) {
        return this.http.get('http://localhost:61957/api/Account/DeleteInterest/'+userId+'/'+sportId)
                   .map(res => res.json()).toPromise();
    }

    deleteSport(sportId) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete("http://localhost:61957/api/Sport/"+sportId,options)
                .map(res => res.json()).toPromise();
    }
}


