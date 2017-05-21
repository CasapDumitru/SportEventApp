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
    var core_1, social_service_1, router_1, AllUserComponent;
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
            AllUserComponent = class AllUserComponent {
                constructor(socialService, router, r) {
                    this.socialService = socialService;
                    this.router = router;
                    this.r = r;
                    this.users = [];
                    this.ready = false;
                    this.userId = +localStorage.getItem('id_token');
                }
                getAccounts() {
                    this.socialService.getAccounts().then(a => {
                        console.log(a);
                        this.users = a;
                        this.ready = true;
                    }).catch(er => {
                        console.log(er);
                    });
                }
                goToDetail(id) {
                    this.router.navigate(['../detailFriend', id], { relativeTo: this.r });
                }
                ngOnInit() {
                    this.getAccounts();
                }
            };
            AllUserComponent = __decorate([
                core_1.Component({
                    selector: 'allusers',
                    templateUrl: 'app/socialpage/all-user.component.html',
                    providers: [social_service_1.SocialService],
                }),
                __metadata("design:paramtypes", [social_service_1.SocialService, router_1.Router, router_1.ActivatedRoute])
            ], AllUserComponent);
            exports_1("AllUserComponent", AllUserComponent);
        }
    };
});
//# sourceMappingURL=all-user.component.js.map