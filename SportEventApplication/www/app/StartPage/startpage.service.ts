import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';


@Injectable()


export class StartPageService {
    
      constructor(private http: Http) { }


      getAdress(lat,lng) {
         return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat +','+lng+'&key=AIzaSyCOFjbmcn99Ri2wFYU-YVCWERFTk3mVBmA')          
                   .map(res => res.json()).toPromise();
      }

      login(username,password) {
          return  this.http.get('http://localhost:61957/api/account/login/'+ username + '/' +password )
                   .map(res => res.json()).toPromise()
      }
}




