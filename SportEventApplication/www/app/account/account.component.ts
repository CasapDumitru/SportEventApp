import {Component} from '@angular/core';
import {AccountService} from './account.service';
import {SignUpAccount} from './../interfaces/signupaccount';
import { GoogleMapService } from "./../google-maps/google-map.service";


@Component({
    selector: 'account',
    templateUrl: 'app/account/account.component.html',
    styleUrls:['app/account/account.style.css'],
    providers: [AccountService,GoogleMapService],
})



export class AccountComponent {

    constructor(private accountService: AccountService,private googleMapService : GoogleMapService){}  

    ready : boolean = false;
    account : SignUpAccount;
    oldPassword : string;
    newPassword : string;
    passwordError : boolean = false;
    editError : boolean = false;
    success : boolean = false;
    getAccount() {
        this.accountService.getSignUpAccount(localStorage.getItem('id_token')).then(
            ac => {
                this.account = ac;
                this.ready = true;
            }
        ).catch (er => console.log(er))

    }

    valuechange(event) {
        console.log(event);
        console.log(this.account);
    }


     mapClicked($event) {
        console.log($event.coords);
        this.account.Adress.latitude = $event.coords.lat;
        this.account.Adress.longitude = $event.coords.lng;
        this.setAddress(  this.account.Adress.latitude,  this.account.Adress.longitude);
        console.log(this.account);
    }

    setAddress(lat,lng): void {
        this.googleMapService.getAdress(lat,lng).then(adress =>{
            this.account.Adress.address= adress.results[0].formatted_address;
        }).catch(error =>{
            console.log("An error");
        })
    }

    EditAccount(){
        this.passwordError = false;
        this.editError = false;
        this.success = false;
        if(this.oldPassword != this.account.Password)
            this.passwordError = true;
        else {
            if(this.newPassword!=undefined)
                this.account.Password = this.newPassword;
                this.accountService.editAccount(this.account).then(ac => {
                    this.success = true;
                }).catch(er => {
                    this.editError = true;
                })
        }
         

 }

    ngOnInit(): void {
        console.log("Initss Accounts Component");
        this.getAccount();
}

}












