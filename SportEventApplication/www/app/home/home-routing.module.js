System.register(["@angular/core", "@angular/router", "./../sport/sport.component", "./../account/account.component", "./home.component", "./../landing/landing.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, sport_component_1, account_component_1, home_component_1, landing_component_1, homeRoutes, HomeRoutingModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sport_component_1_1) {
                sport_component_1 = sport_component_1_1;
            },
            function (account_component_1_1) {
                account_component_1 = account_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (landing_component_1_1) {
                landing_component_1 = landing_component_1_1;
            }
        ],
        execute: function () {
            homeRoutes = [
                {
                    path: '',
                    component: home_component_1.HomeComponent,
                    children: [
                        {
                            path: '',
                            children: [
                                { path: 'sport', component: sport_component_1.SportComponent },
                                { path: 'account', component: account_component_1.AccountComponent },
                                { path: 'landing', component: landing_component_1.LandingComponent },
                                { path: 'social',
                                    loadChildren: 'app/socialpage/social.module#SocialModule'
                                },
                                {
                                    path: 'sportevent',
                                    loadChildren: 'app/sport-event/sport-event.module#SportEventModule'
                                },
                            ]
                        }
                    ]
                }
            ];
            HomeRoutingModule = class HomeRoutingModule {
            };
            HomeRoutingModule = __decorate([
                core_1.NgModule({
                    imports: [router_1.RouterModule.forChild(homeRoutes)],
                    exports: [router_1.RouterModule]
                })
            ], HomeRoutingModule);
            exports_1("HomeRoutingModule", HomeRoutingModule);
        }
    };
});
//# sourceMappingURL=home-routing.module.js.map