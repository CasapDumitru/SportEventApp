import { Component } from "@angular/core";
import {SportEventService } from './sport-event.service';
import { DetailSportEvent } from './../interfaces/detail-sport-event';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GoogleMapService } from  './../google-maps/google-map.service';
import {DomSanitizer} from '@angular/platform-browser';
import { SimpleAccount } from './../interfaces/simple-account';
import { AccountService } from './../account/account.service';

@Component ({
    selector : 'sportevent',
    templateUrl : 'app/sport-event/sport-event-detail.component.html',
    styleUrls :['app/sport-event/sport-event.style.css'],
    providers: [SportEventService,GoogleMapService,AccountService]
})

export class SportEventDetailComponent {

    constructor(private sportEventService: SportEventService, private route: ActivatedRoute,
    private router: Router ,private googleMapService : GoogleMapService,private sanitizer: DomSanitizer,
    private accountService : AccountService){}   

    sportEvent : DetailSportEvent;
    ready : boolean = false;
    sportEventId: number;
    accountId = +localStorage.getItem('id_token');
    imag : any;
    simpleAccount : SimpleAccount = {
        Id : null,
        FullName:null
    };
     


    getAccount() {
        this.accountService.getAccount(localStorage.getItem('id_token')).then(ac => {
            this.simpleAccount.Id = ac.Id;
            this.simpleAccount.FullName = ac.FullName;
            console.log(ac);
            console.log(this.simpleAccount);
        })
    }

    getSportEventById(id): void {
        this.sportEventService.getDetailSportEvent(id,this.accountId).then(sEv =>{
            this.sportEvent = sEv;
            /*this.simpleAccount.Id = this.sportEvent.Owner.Id;
            this.simpleAccount.FullName = this.sportEvent.Owner.FullName;*/
            if(this.sportEvent.ImagePath == null)
                this.sportEvent.ImagePath = "noimage.jpg";

            var img = this.sportEvent.ImagePath.split('.');    
            this.sportEventService.getimage(img[0],img[1]).then(
        im => {
            console.log(im);
            this.imag = im;
            this.sportEvent.ImageBase64 = this.imag._body.substring(1,this.imag._body.length-1);
            this.ready = true;
        }
    )


        }).catch(error =>{
            console.log("An error");
        })
    }

    Going() {
        this.sportEvent.Going = true;
        
        this.sportEvent.Attendees.push(this.simpleAccount);
        this.sportEventService.going(this.sportEventId,localStorage.getItem('id_token')).then(
            sEv => console.log(sEv)
        ).catch(er => console.log(er));
    }

    NotGoing(){
        this.sportEvent.Going = false;
        this.sportEvent.Attendees.pop();
        this.sportEventService.notgoing(this.sportEventId,localStorage.getItem('id_token')).then(
            sEv => console.log(sEv)
        ).catch(er => console.log(er));
    }


     mapClicked($event) {
         if(this.accountId == this.sportEvent.Owner.Id) {
            this.sportEvent.Adress.latitude = $event.coords.lat;
            this.sportEvent.Adress.longitude = $event.coords.lng;
            this.setAddress( this.sportEvent.Adress.latitude,  this.sportEvent.Adress.longitude);
         }
        
    }

    setAddress(lat,lng): void {

        this.googleMapService.getAdress(lat,lng).then(adress =>{
            this.sportEvent.Adress.address = adress.results[0].formatted_address;
        }).catch(error =>{
            console.log("An error");
        })
    }


    EditSpEvent() {
        console.log(this.sportEvent);
        this.sportEventService.editSportEvent(this.sportEvent).then(spEv => console.log(spEv)).catch(er => console.log(er))
    }

    ngOnInit(): void {
  
  this.getAccount();
    this.route.params.subscribe(params => {
        this.sportEventId = +params['id'];
        this.getSportEventById(+params['id']);
    });

    }

}