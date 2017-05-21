System.register(["@angular/core", "@angular/router", "./admin-home.component", "./../adminsports/admin-sport.component", "./../adminsportevents/admin-sportevents.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, admin_home_component_1, admin_sport_component_1, admin_sportevents_component_1, homeRoutes, AdminHomeRoutingModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (admin_home_component_1_1) {
                admin_home_component_1 = admin_home_component_1_1;
            },
            function (admin_sport_component_1_1) {
                admin_sport_component_1 = admin_sport_component_1_1;
            },
            function (admin_sportevents_component_1_1) {
                admin_sportevents_component_1 = admin_sportevents_component_1_1;
            }
        ],
        execute: function () {
            homeRoutes = [
                {
                    path: '',
                    component: admin_home_component_1.AdminHomeComponent,
                    children: [
                        {
                            path: '',
                            children: [
                                { path: 'adminSport', component: admin_sport_component_1.AdminSportComponent },
                                { path: 'adminSportEvent', component: admin_sportevents_component_1.AdminSportEventComponent }
                            ]
                        }
                    ]
                }
            ];
            AdminHomeRoutingModule = class AdminHomeRoutingModule {
            };
            AdminHomeRoutingModule = __decorate([
                core_1.NgModule({
                    imports: [router_1.RouterModule.forChild(homeRoutes)],
                    exports: [router_1.RouterModule]
                })
            ], AdminHomeRoutingModule);
            exports_1("AdminHomeRoutingModule", AdminHomeRoutingModule);
        }
    };
});
//# sourceMappingURL=admin-home-routing.module.js.map