System.register(["@angular/core", "./home.component", "@angular/common", "@angular/router", "./../landing/landing.module", "./../sport/sport.module", "./../StartPage/startpage.module", "./../account/account.module", "./../sport-event/sport-event.module", "./home-routing.module", "./../socialpage/social.module"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, home_component_1, common_1, router_1, landing_module_1, sport_module_1, startpage_module_1, account_module_1, sport_event_module_1, home_routing_module_1, social_module_1, HomeModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (landing_module_1_1) {
                landing_module_1 = landing_module_1_1;
            },
            function (sport_module_1_1) {
                sport_module_1 = sport_module_1_1;
            },
            function (startpage_module_1_1) {
                startpage_module_1 = startpage_module_1_1;
            },
            function (account_module_1_1) {
                account_module_1 = account_module_1_1;
            },
            function (sport_event_module_1_1) {
                sport_event_module_1 = sport_event_module_1_1;
            },
            function (home_routing_module_1_1) {
                home_routing_module_1 = home_routing_module_1_1;
            },
            function (social_module_1_1) {
                social_module_1 = social_module_1_1;
            }
        ],
        execute: function () {
            HomeModule = class HomeModule {
            };
            HomeModule = __decorate([
                core_1.NgModule({
                    declarations: [home_component_1.HomeComponent],
                    imports: [common_1.CommonModule, router_1.RouterModule, home_routing_module_1.HomeRoutingModule, sport_module_1.SportModule, startpage_module_1.StartPageModule, account_module_1.AccountModule,
                        sport_event_module_1.SportEventModule, landing_module_1.LandingModule, social_module_1.SocialModule]
                })
            ], HomeModule);
            exports_1("HomeModule", HomeModule);
        }
    };
});
//# sourceMappingURL=home.module.js.map