System.register(["@angular/core", "@angular/router", "./../sport-event/sport-event.create.component", "./../sport-event/sport-event.created.component", "./../sport-event/sport-event.going.component", "./../sport-event/sport-event.all.component", "./../sport-event/sport-event.component", "./../sport-event/sport-event-detail.component", "./../sport-event/sport-event.near.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, sport_event_create_component_1, sport_event_created_component_1, sport_event_going_component_1, sport_event_all_component_1, sport_event_component_1, sport_event_detail_component_1, sport_event_near_component_1, sportEventsRoutes, SportEventRoutingModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sport_event_create_component_1_1) {
                sport_event_create_component_1 = sport_event_create_component_1_1;
            },
            function (sport_event_created_component_1_1) {
                sport_event_created_component_1 = sport_event_created_component_1_1;
            },
            function (sport_event_going_component_1_1) {
                sport_event_going_component_1 = sport_event_going_component_1_1;
            },
            function (sport_event_all_component_1_1) {
                sport_event_all_component_1 = sport_event_all_component_1_1;
            },
            function (sport_event_component_1_1) {
                sport_event_component_1 = sport_event_component_1_1;
            },
            function (sport_event_detail_component_1_1) {
                sport_event_detail_component_1 = sport_event_detail_component_1_1;
            },
            function (sport_event_near_component_1_1) {
                sport_event_near_component_1 = sport_event_near_component_1_1;
            }
        ],
        execute: function () {
            sportEventsRoutes = [
                {
                    path: '',
                    component: sport_event_component_1.SportEventComponent,
                    children: [
                        {
                            path: '',
                            children: [
                                { path: 'createsportevent', component: sport_event_create_component_1.CreateSportEventComponent },
                                { path: 'createdsportevents', component: sport_event_created_component_1.CreatedSportEventComponent },
                                { path: 'goingsportevents', component: sport_event_going_component_1.GoingSportEventComponent },
                                { path: 'allsportevents', component: sport_event_all_component_1.SportEventAllComponent },
                                { path: 'nearsportevents', component: sport_event_near_component_1.NearSportEventComponent },
                                { path: 'detail/:id', component: sport_event_detail_component_1.SportEventDetailComponent },
                            ]
                        }
                    ]
                }
            ];
            SportEventRoutingModule = class SportEventRoutingModule {
            };
            SportEventRoutingModule = __decorate([
                core_1.NgModule({
                    imports: [router_1.RouterModule.forChild(sportEventsRoutes)],
                    exports: [router_1.RouterModule]
                })
            ], SportEventRoutingModule);
            exports_1("SportEventRoutingModule", SportEventRoutingModule);
        }
    };
});
//# sourceMappingURL=sport-event-routing.module.js.map