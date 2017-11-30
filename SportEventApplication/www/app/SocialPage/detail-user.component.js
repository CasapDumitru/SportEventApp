System.register(["@angular/core", "@angular/router", "./social.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, social_service_1, DetailUserComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (social_service_1_1) {
                social_service_1 = social_service_1_1;
            }
        ],
        execute: function () {
            DetailUserComponent = class DetailUserComponent {
                constructor(socialService, route, router) {
                    this.socialService = socialService;
                    this.route = route;
                    this.router = router;
                    this.ready = false;
                    this.accountId = +localStorage.getItem('id_token');
                    this.messages = [];
                    this.pageSize = 8;
                    this.pageNumber = 1;
                    this.messageReady = false;
                }
                getFriendDetail(userId, friendId) {
                    this.socialService.getDetailUser(userId, friendId).then(u => {
                        console.log(u);
                        this.user = u;
                        this.ready = true;
                        this.GetOrCreateConv();
                    }).catch(er => {
                        console.log(er);
                    });
                }
                AddToFriends() {
                    this.user.IsFriend = true;
                    this.socialService.addFriend(localStorage.getItem('id_token'), this.user.Id).then(fr => {
                        console.log(fr);
                        this.user.Since = fr.Since;
                    }).catch(er => console.log(er));
                }
                RemoveFromFriends() {
                    this.user.IsFriend = false;
                    this.socialService.removeFriend(localStorage.getItem('id_token'), this.user.Id).then(fr => {
                        console.log(fr);
                        this.user.Since = fr.Since;
                    }).catch(er => console.log(er));
                }
                GetOrCreateConv() {
                    this.socialService.getOrCreateConversation(this.user.Id, this.accountId).then(c => {
                        this.conversationID = c;
                        this.GetMessagesPage();
                    });
                }
                GetMessagesPage() {
                    this.socialService.getMessagesByPage(this.pageSize, this.pageNumber, this.user.Id, this.accountId).then(m => {
                        console.log(m);
                        m.forEach(element => {
                            this.messages.unshift(element);
                        });
                        this.messageReady = true;
                        this.pageNumber++;
                    });
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
                        Text: this.messageText,
                        Date: null,
                        User: {
                            Id: this.accountId,
                            FullName: ""
                        },
                        ConversationId: this.conversationID
                    };
                    this.messageText = null;
                    this.socialService.postMessage(this.currentMessage).then(res => {
                        console.log(res);
                        this.messages.push(res);
                    }).catch(er => {
                        console.log(er);
                    });
                }
                getDate(time) {
                    var arr = time.toString().split("T");
                    return arr[0];
                }
                getHour(time) {
                    var arr = time.toString().split("T");
                    return arr[1].split('.')[0];
                }
                ngOnInit() {
                    this.route.params.subscribe(params => {
                        this.getFriendDetail(this.accountId, +params['id']);
                    });
                }
            };
            DetailUserComponent = __decorate([
                core_1.Component({
                    styles: [
                        `.search-results {
            height: 20rem;
            overflow: scroll;
        }`
                    ],
                    selector: 'detail-user',
                    templateUrl: 'app/socialPage/detail-user.component.html',
                    styleUrls: ['app/socialPage/social.style.css'],
                    providers: [social_service_1.SocialService]
                }),
                __metadata("design:paramtypes", [social_service_1.SocialService, router_1.ActivatedRoute,
                    router_1.Router])
            ], DetailUserComponent);
            exports_1("DetailUserComponent", DetailUserComponent);
        }
    };
});
//# sourceMappingURL=detail-user.component.js.map