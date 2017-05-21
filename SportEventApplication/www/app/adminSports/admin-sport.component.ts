import {Component} from '@angular/core';
import {SportService} from './../sport/sport.service';
import {Sport} from './../sport/sport';


@Component({
    selector: 'admin-sports',
    templateUrl: 'app/adminSports/admin-sport.component.html',
    providers: [SportService]
})

export class AdminSportComponent {
    name: string = "The name of sports is";
    sports: Sport[];
    newSport : Sport;
    


 constructor(private sportService: SportService){}            
    
getSports(): void {
        this.sportService.getSports().then(newSports =>{
            console.log(newSports);
            this.sports = newSports ;
        }).catch(error =>{
            console.log("An error");
        })
    }

AddSport(): void {
    console.log("post");
    this.sportService.postSport(this.newSport).then(
        sport => {
            console.log(sport),
            this.sports.push(sport);
        }).catch(error => console.log("error"))
        
    
}

DeleteSport(id,index) {
    this.sportService.deleteSport(id).then( res => {
        console.log(res);
        this.sports.splice(index,1);
    }).catch( er => {
        console.log(er);
    })
}


    ngOnInit(): void {
        console.log("Initss");
        this.getSports();
        this.newSport = {
            Id : null,
            Name : null
        }
    }
    
}