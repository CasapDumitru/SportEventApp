import {Component} from '@angular/core';
import { Friendship } from './../interfaces/friendship';
import { SocialService } from './social.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'friends',
    templateUrl: 'app/socialpage/friends.component.html',
    styleUrls: ['app/SocialPage/social.style.css'],
    providers: [SocialService],
})

export class FriendsComponent {

    constructor(private socialService: SocialService,private router: Router,private r:ActivatedRoute,){}  

    friends : Friendship[] = [];
    userId : number = +localStorage.getItem('id_token');
    ready : boolean = false;

    getFriends() {
        this.socialService.getFriends(this.userId).then(a => {
            console.log(a);
            this.friends = a;
            this.ready = true;
        }).catch(er => {
            console.log(er);
        })
    }

     goToDetail(user : Friendship) {
         var id = 0;
         if(user.UserOne.Id != this.userId) 
            id = user.UserOne.Id;
         else 
            id = user.UserTwo.Id;
            
        this.router.navigate(['../detailFriend',id], { relativeTo: this.r } );
    }

    getDate(time: Date) {
        var arr = time.toString().split("T");
        return arr[0];
    }

    ngOnInit() {
        this.getFriends();
    }

}