System.register(["@angular/core", "./social.service", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, social_service_1, router_1, FriendsComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (social_service_1_1) {
                social_service_1 = social_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            FriendsComponent = class FriendsComponent {
                constructor(socialService, router, r) {
                    this.socialService = socialService;
                    this.router = router;
                    this.r = r;
                    this.friends = [];
                    this.userId = +localStorage.getItem('id_token');
                    this.ready = false;
                }
                getFriends() {
                    this.socialService.getFriends(this.userId).then(a => {
                        console.log(a);
                        this.friends = a;
                        this.ready = true;
                    }).catch(er => {
                        console.log(er);
                    });
                }
                goToDetail(user) {
                    var id = 0;
                    if (user.UserOne.Id != this.userId)
                        id = user.UserOne.Id;
                    else
                        id = user.UserTwo.Id;
                    this.router.navigate(['../detailFriend', id], { relativeTo: this.r });
                }
                getDate(time) {
                    var arr = time.toString().split("T");
                    return arr[0];
                }
                ngOnInit() {
                    this.getFriends();
                }
            };
            FriendsComponent = __decorate([
                core_1.Component({
                    selector: 'friends',
                    templateUrl: 'app/socialpage/friends.component.html',
                    styleUrls: ['app/SocialPage/social.style.css'],
                    providers: [social_service_1.SocialService],
                }),
                __metadata("design:paramtypes", [social_service_1.SocialService, router_1.Router, router_1.ActivatedRoute])
            ], FriendsComponent);
            exports_1("FriendsComponent", FriendsComponent);
        }
    };
});
//# sourceMappingURL=friends.component.js.map