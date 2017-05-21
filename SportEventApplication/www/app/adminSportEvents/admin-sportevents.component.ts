import {Component} from '@angular/core';
import { SportEventService } from './../sport-event/sport-event.service';
import { SportEvent } from './../interfaces/sport-event';

@Component({
    selector: 'admin-sportevents',
    templateUrl: 'app/adminSportEvents/admin-sportevents.component.html',
    providers: [SportEventService]
})


export class AdminSportEventComponent {
       
    constructor(private sportEventService: SportEventService){}   

    sportEvents : SportEvent[] = [];
    ready : boolean = false;

    getSportEvents(){
        this.sportEventService.getSportEvents().then(sp => {
            console.log(sp);
            this.sportEvents = sp;
            this.ready = true;
        }).catch(er => {
            console.log(er);
        })
    }

    DeleteSportEvent(id,index) {
    this.sportEventService.deleteSportEvent(id).then( res => {
        console.log(res);
        this.sportEvents.splice(index,1);
    }).catch( er => {
        console.log(er);
    })
}

    ngOnInit() {
        this.getSportEvents();
    }

}