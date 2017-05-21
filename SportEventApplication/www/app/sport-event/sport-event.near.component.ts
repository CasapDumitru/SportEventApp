import { Component } from "@angular/core";
import { SportEventService } from './sport-event.service';
import { AccountService } from './../account/account.service'
import { SportEvent } from './../interfaces/sport-event';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';


@Component ({
     styles: [
        `.search-results {
            height: 50rem;
            overflow: scroll;
        }`
    ],
    templateUrl : 'app/sport-event/sport-event.all.component.html',
    styleUrls :['app/sport-event/sport-event.style.css'],
    providers: [SportEventService,AccountService]
})

export class NearSportEventComponent {

    constructor(private sportEventService: SportEventService, private router: Router,private r:ActivatedRoute,
                private accountService: AccountService, private sanitizer: DomSanitizer){}   

    sportEvents : SportEvent[] = [];
    pageNumber: number = 1;
    ready : boolean = true;
    currentLat :number;
    currentLng : number;
    imag : any;
    index : any;
    finishScroll : boolean = false;

    goToDetail(id) {
        console.log("go to detail" + id);
             this.router.navigate(['../detail',id], { relativeTo: this.r } );
    }

    getAPage() {
            this.sportEventService.getNearSportEventByPage(6,this.pageNumber,this.currentLat,this.currentLng).then(
            sEv => {

                var length = this.sportEvents.length;
                this.sportEvents.push.apply(this.sportEvents,sEv);
                if(length == this.sportEvents.length)
                    this.finishScroll = true;
                else 
                    this.pageNumber++;
                
                this.ready = true;
            }
        ).catch(error => console.log("an error"));
    }
  
    onScrollDown () {
        if(this.finishScroll != false)
            this.getAPage();
    }

 setPosition(position){
      this.currentLat = position.coords.latitude;
      this.currentLng = position.coords.longitude;
      console.log(position.coords);
      this.getAPage();
      }


    ngOnInit(): void {
        console.log("All Sport Event COmponents");
    
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      };
   }


}


