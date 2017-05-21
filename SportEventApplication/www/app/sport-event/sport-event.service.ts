import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import { SportEvent } from './../interfaces/sport-event';


@Injectable()


export class SportEventService {
    
      constructor(private http: Http) { }


      getSportEvents() {
          return this.http.get('http://localhost:61957/api/sportevent')
                   .map(res => res.json()).toPromise();
      }

      getSportEvent(id) {
            return this.http.get('http://localhost:61957/api/sportevent/'+id)
                   .map(res => res.json()).toPromise();
      }

      getSportByPage(pageSize,pageNumber){
            return this.http.get('http://localhost:61957/api/sportevent/GetByPage/'+pageSize + '/' + pageNumber)
                   .map(res => res.json()).toPromise();
      }

      postSportEvent(sportEvent: SportEvent){
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = JSON.stringify(sportEvent);

            return this.http.post("http://localhost:61957/api/SportEvent", body, options).map(res => res.json()).toPromise();
      }

      getSportEventInterested(ids) {
            return this.http.get('http://localhost:61957/api/sportevent/GetInterested/'+ids)
                   .map(res => res.json()).toPromise();
      }
      getSportEventInterestedByPage(pageSize,pageNumber,userId) {
            return this.http.get('http://localhost:61957/api/sportevent/GetInterestedByPage/'+pageSize + '/' + pageNumber
                                                                                              + '/' + userId)
                   .map(res => res.json()).toPromise();
      }

      getSportEventCreatedByPage(pageSize,pageNumber,userId) {
            return this.http.get('http://localhost:61957/api/sportevent/GetCreatedByPage/'+pageSize + '/' + pageNumber
                                                                                              + '/' + userId)
                   .map(res => res.json()).toPromise();
      }

      getDetailSportEvent(sportEvId,userId) {
            return this.http.get('http://localhost:61957/api/SportEventDetail/Get/'+sportEvId + '/' + userId)
                   .map(res => res.json()).toPromise();
      }

      going(sportEvId,userId) {
            return this.http.get('http://localhost:61957/api/SportEvent/Going/'+sportEvId + '/' + userId)
                   .map(res => res.json()).toPromise();
      }

      notgoing(sportEvId,userId) {
            return this.http.get('http://localhost:61957/api/SportEvent/NotGoing/'+sportEvId + '/' + userId)
                   .map(res => res.json()).toPromise();
      }
      
      editSportEvent(sportEvent) {
         let headers = new Headers({ 'Content-Type': 'application/json' });
         let options = new RequestOptions({ headers: headers });
         let body = JSON.stringify(sportEvent);

    return this.http.put("http://localhost:61957/api/SportEventDetail", body, options).map(res => res.json()).toPromise();
    }

    getNearSportEventByPage(pageSize,pageNumber,lat,lng) {
            return this.http.get('http://localhost:61957/api/sportevent/GetNearByPage/'+pageSize + '/' + pageNumber
                                                                   + '/' + lat + '/' + lng + '/')
                   .map(res => res.json()).toPromise();
      }



      postImage(image,name) {
            console.log("POSST IMAGE")
            let input = new FormData();
            input.append("file",image);
            return this.http.post("http://localhost:61957/api/Image/PostImage/"+ name , input).map(res => res.json()).toPromise();;
      }

      getimage(name,ext) {
            return this.http.get('http://localhost:61957/api/Image/Get/'+name+'/'+ext).toPromise();
      }

      deleteSportEvent(sportId) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete("http://localhost:61957/api/SportEvent/"+sportId,options)
                .map(res => res.json()).toPromise();
     }
    
}