import { Component } from "@angular/core";
import {SportEventService } from './sport-event.service';
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
    selector : 'sportevent',
    templateUrl : 'app/sport-event/sport-event.all.component.html',
    styleUrls :['app/sport-event/sport-event.style.css'],
    providers: [SportEventService]
})

export class SportEventAllComponent {

    constructor(private sportEventService: SportEventService, private router: Router,private r:ActivatedRoute,
                private sanitizer: DomSanitizer){}   

    sportEvents : SportEvent[] = [];
    pageNumber: number = 1;
    ready : boolean = false;
    onePage : SportEvent[];
    imag : any;
    index : any;
    finishScroll : boolean = false;

    goToDetail(id) {
        console.log("go to detail" + id);
             this.router.navigate(['../detail',id], { relativeTo: this.r } );
    }

    getAPage() {
            this.sportEventService.getSportEventInterestedByPage(6,this.pageNumber,localStorage.getItem('id_token')).then(
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
        if(this.finishScroll == false) {
            this.getAPage();
            console.log('get on scroll down');    
        }
        console.log('scrolled down!!');
    }
 
    ngOnInit(): void {
        console.log("All Sport Event COmponents");
        this.getAPage();
    }
}