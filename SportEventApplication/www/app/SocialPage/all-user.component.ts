import {Component} from '@angular/core';
import { Account } from './../interfaces/account';
import { SocialService } from './social.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'allusers',
    templateUrl: 'app/socialpage/all-user.component.html',
    styleUrls :['app/SocialPage/social.style.css'],
    providers: [SocialService],
})


export class AllUserComponent {

    constructor(private socialService: SocialService,private router: Router,private r:ActivatedRoute,){}  

    users : Account[] = [];
    ready : boolean = false;
    userId : number = +localStorage.getItem('id_token');
    
    getAccounts() {
        this.socialService.getAccounts().then(a => {
            console.log(a);
            this.users = a;
            this.ready = true;
        }).catch(er => {
            console.log(er);
        })
    }

    goToDetail(id) {
        this.router.navigate(['../detailFriend',id], { relativeTo: this.r } );
    }

    ngOnInit() {
        this.getAccounts();
    }

}