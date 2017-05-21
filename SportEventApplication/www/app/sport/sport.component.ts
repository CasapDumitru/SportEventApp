import {Component} from '@angular/core';
import {SportService} from './sport.service';
import {Sport} from './sport';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {SportInterest} from './sport.interest';
//import {SearchPipe} from './search-pipe';

@Component({
    selector: 'sports',
    templateUrl: 'app/sport/sport.component.html',
    providers: [SportService]
})

export class SportComponent {
    name: string = "The name of sports is";
    sports: Sport[];
    newSport : Sport;
    interests : SportInterest[];
    sportInter : SportInterest[];


    constructor(private sportService: SportService){}            
    
getSports(): void {
        this.sportService.getSports().then(newSports =>{
            this.sports = newSports ;
        }).catch(error =>{
            console.log("An error");
        })
    }



getInterestSports(): void {
        this.sportService.GetSportInterest(localStorage.getItem('id_token')).then(sp =>{
            this.interests = sp ;
            console.log(this.interests);
            
        }).catch(error =>{
            console.log("An error");
        })
    }

checkboxevent(event,id) {
    console.log(event);
    console.log(id);
    if(event) {
        this.sportService.addInterest(localStorage.getItem('id_token'),id);
    }
    else {
        this.sportService.removeInterest(localStorage.getItem('id_token'),id);
    }
}

isInterest(sportId):boolean {
    console.log("entert function")
    console.log(sportId);
    console.log(this.interests);
     var sp = this.interests.find(a => a.Id == sportId);
     if(sp == undefined) 
        return false;
    return true;
}

    ngOnInit(): void {
        console.log("Initss");
        this.getInterestSports();
    }
}