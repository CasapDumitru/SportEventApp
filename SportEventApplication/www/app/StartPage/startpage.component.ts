import { Component } from "@angular/core";
import { StartPageService } from "./startpage.service";
import { SignUpAccount } from "./../interfaces/signupaccount";
import { AccountService } from "./../account/account.service";
import { Router} from "@angular/router";
import { GoogleMapService } from "./../google-maps/google-map.service";



interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
    icon?: string;
}


@Component( {
    selector: 'startpage',
    templateUrl:'app/startpage/startpage.component.html',
    styleUrls :['app/startpage/startpage.style.css'],
    providers: [StartPageService,AccountService,GoogleMapService]
})

export class StartPageComponent{

     constructor(private startPageService: StartPageService, private accountService: AccountService,
                private router: Router, private googleMapService : GoogleMapService ){}    

    title: string = 'My first angular2-google-maps project';
    lat: number = 51.678418;
    lng: number = 7.809007;
    x:number;
    y:number;
    loginUserName : string;
    loginPassword : string;
    loginId: number = 10;
    m: marker = {
        lat: 0,
        lng: 0,
        label:"L",
        draggable: false
    };
    existAccount = false;
    loginFail = false;

    public newAccount: SignUpAccount;

    update() {
        this.x= 10;
        this.y = 20;
    }

    clickedMarker(lat: number,label: string, index: number) {
        console.log(`clicked the marker: ${label || index}}`)
        console.log(lat);
        console.log(this.loginId);
    }

    mapClicked($event) {
        console.log($event.coords);
        this.m.lat = $event.coords.lat;
        this.m.lng = $event.coords.lng;
        this.setAddress( this.m.lat, this.m.lng);
    }

    setAddress(lat,lng): void {
        this.googleMapService.getAdress(lat,lng).then(adress =>{
            this.newAccount.Adress.address= adress.results[0].formatted_address;
        }).catch(error =>{
            console.log("An error");
        })
    }

   
    SignUp() {
        this.newAccount.Adress.latitude= this.m.lat;
        this.newAccount.Adress.longitude= this.m.lng;
        console.log(this.newAccount);
        this.accountService.postAccount(this.newAccount).then(
            ac => {
                    console.log("nowwwwwww");
                    console.log(ac);
                    console.log(ac.Id);
                    localStorage.setItem('id_token', ac.Id);
                    this.router.navigate(['home']);
                  }).catch( er => {
                      console.log(er);
                      this.existAccount = true;
                  })
                  
    }

    SignIn() {
        console.log(this.loginUserName);
        console.log(this.loginPassword);
        this.startPageService.login(this.loginUserName,this.loginPassword).then(
            log => {
                 console.log(log),
                 localStorage.setItem('id_token', log.Id)
                 this.router.navigate(['home']);
            }
        ).catch( error => {
            console.log(error.text());
            this.loginFail = true;
        })
    }

 

   ngOnInit() {
     
        this.newAccount = {
        Id : null,
        FirstName : null,
        LastName : null,
        UserName: null,
        Email :null,
        Password: null,
        Adress : {
            Id : null,
            latitude: null,
            longitude: null,
            address: null
        }
        }       
    }
}

 
