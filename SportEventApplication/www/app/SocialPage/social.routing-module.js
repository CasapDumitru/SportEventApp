System.register(["@angular/core", "@angular/router", "./../socialpage/social.component", "./../socialpage/all-user.component", "./../socialpage/friends.component", "./../socialpage/detail-user.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, social_component_1, all_user_component_1, friends_component_1, detail_user_component_1, socialRoutes, SocialRoutingModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (social_component_1_1) {
                social_component_1 = social_component_1_1;
            },
            function (all_user_component_1_1) {
                all_user_component_1 = all_user_component_1_1;
            },
            function (friends_component_1_1) {
                friends_component_1 = friends_component_1_1;
            },
            function (detail_user_component_1_1) {
                detail_user_component_1 = detail_user_component_1_1;
            }
        ],
        execute: function () {
            socialRoutes = [
                {
                    path: '',
                    component: social_component_1.SocialComponent,
                    children: [
                        {
                            path: '',
                            children: [
                                { path: 'all-users', component: all_user_component_1.AllUserComponent },
                                { path: 'friends', component: friends_component_1.FriendsComponent },
                                { path: 'detailFriend/:id', component: detail_user_component_1.DetailUserComponent },
                            ]
                        }
                    ]
                }
            ];
            SocialRoutingModule = class SocialRoutingModule {
            };
            SocialRoutingModule = __decorate([
                core_1.NgModule({
                    imports: [router_1.RouterModule.forChild(socialRoutes)],
                    exports: [router_1.RouterModule]
                })
            ], SocialRoutingModule);
            exports_1("SocialRoutingModule", SocialRoutingModule);
        }
    };
});
//# sourceMappingURL=social.routing-module.js.map