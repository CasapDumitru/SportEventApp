import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';


@Injectable()


export class AdminService {
    
      constructor(private http: Http) { }

      login(username,password) {
          return  this.http.get('http://localhost:61957/api/admin/login/'+ username + '/' +password )
                   .map(res => res.json()).toPromise()
      }
}