import { Injectable } from "@angular/core";
import { Http } from '@angular/http';


@Injectable()

export class GoogleMapService {
    
      constructor(private http: Http) { }

      getAdress(lat,lng) {
         return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat +','+lng+'&key=AIzaSyCOFjbmcn99Ri2wFYU-YVCWERFTk3mVBmA')          
                   .map(res => res.json()).toPromise();
      }
}