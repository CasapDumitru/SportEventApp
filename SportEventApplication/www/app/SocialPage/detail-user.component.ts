import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SocialService } from './social.service';
import { DetailFriend} from './../interfaces/detailfriend';
import { Message} from './../interfaces/message';

@Component ({
    styles: [
        `.search-results {
            height: 20rem;
            overflow: scroll;
        }`
    ],
    selector : 'detail-user',
    templateUrl : 'app/socialPage/detail-user.component.html',
    styleUrls: ['app/socialPage/social.style.css'],
    providers: [SocialService]
})

export class DetailUserComponent {

    constructor(private socialService: SocialService, private route: ActivatedRoute,
    private router: Router){}   


    user : DetailFriend;
    ready : boolean = false;
    accountId = +localStorage.getItem('id_token');
    messages : Message[] = [];
    pageSize : number = 8;
    pageNumber : number = 1;
    messageReady : boolean = false;
    messageText : string ;
    currentMessage : Message;
    conversationID : number;


    getFriendDetail(userId,friendId): void {
        this.socialService.getDetailUser(userId,friendId).then(u => {
            console.log(u);
            this.user = u;
            this.ready = true;
            this.GetOrCreateConv();
        }).catch(er => {
            console.log(er);
        })
    }


    AddToFriends() {
        this.user.IsFriend = true;
        this.socialService.addFriend(localStorage.getItem('id_token'),this.user.Id).then( fr => {
            console.log(fr);
            this.user.Since = fr.Since;
        }
        ).catch(er => console.log(er));
    }

    RemoveFromFriends() {
        this.user.IsFriend = false;
        this.socialService.removeFriend(localStorage.getItem('id_token'),this.user.Id).then( fr => {
            console.log(fr);
            this.user.Since = fr.Since;
        }
        ).catch(er => console.log(er));
    }

    GetOrCreateConv() {
        this.socialService.getOrCreateConversation(this.user.Id,this.accountId).then( c => {
            this.conversationID = c;
            this.GetMessagesPage();
        })
    }

    GetMessagesPage() {
        this.socialService.getMessagesByPage(this.pageSize,this.pageNumber,this.user.Id,this.accountId).then(m => {
            console.log(m);
            m.forEach(element => {
                this.messages.unshift(element);
            });
            this.messageReady = true;
            this.pageNumber++;
        })
    }

    onScrollDown() {
        console.log("Scroll Down");
    }

    onScrollUp() {
        this.GetMessagesPage();
    }

   
   SendMessage() {
       console.log(this.messageText);
       
       this.currentMessage = {
           Id: null,
           Text : this.messageText,
           Date : null,
           User : {
               Id : this.accountId,
               FullName : ""
           },
           ConversationId : this.conversationID
       }
       
       this.messageText = null;

       this.socialService.postMessage(this.currentMessage).then(res => {
           console.log(res);
           this.messages.push(res);
       }).catch(er => {
           console.log(er);
       })

   }
   
   getDate(time: Date) {
        var arr = time.toString().split("T");
        return arr[0];
    }

    getHour(time: Date) {
        var arr = time.toString().split("T");
        return arr[1].split('.')[0];
    }

    ngOnInit(): void {

        this.route.params.subscribe(params => {
        this.getFriendDetail(this.accountId,+params['id']);
    });
       
    }
}