System.register(["@angular/core", "./sport-event.component", "@angular/common", "@angular/router", "angular2-google-maps/core/core-module", "./sport-event-routing.module", "./../sport-event/sport-event.create.component", "./../sport-event/sport-event.created.component", "./../sport-event/sport-event.going.component", "./../sport-event/sport-event.all.component", "./../sport-event/sport-event-detail.component", "./../sport-event/sport-event.near.component", "angular2-infinite-scroll", "@angular/forms", "ng2-datetime-picker", "ng2-imageupload"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, sport_event_component_1, common_1, router_1, core_module_1, sport_event_routing_module_1, sport_event_create_component_1, sport_event_created_component_1, sport_event_going_component_1, sport_event_all_component_1, sport_event_detail_component_1, sport_event_near_component_1, angular2_infinite_scroll_1, forms_1, ng2_datetime_picker_1, ng2_imageupload_1, SportEventModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sport_event_component_1_1) {
                sport_event_component_1 = sport_event_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_module_1_1) {
                core_module_1 = core_module_1_1;
            },
            function (sport_event_routing_module_1_1) {
                sport_event_routing_module_1 = sport_event_routing_module_1_1;
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
            function (sport_event_detail_component_1_1) {
                sport_event_detail_component_1 = sport_event_detail_component_1_1;
            },
            function (sport_event_near_component_1_1) {
                sport_event_near_component_1 = sport_event_near_component_1_1;
            },
            function (angular2_infinite_scroll_1_1) {
                angular2_infinite_scroll_1 = angular2_infinite_scroll_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (ng2_datetime_picker_1_1) {
                ng2_datetime_picker_1 = ng2_datetime_picker_1_1;
            },
            function (ng2_imageupload_1_1) {
                ng2_imageupload_1 = ng2_imageupload_1_1;
            }
        ],
        execute: function () {
            SportEventModule = class SportEventModule {
            };
            SportEventModule = __decorate([
                core_1.NgModule({
                    declarations: [sport_event_component_1.SportEventComponent, sport_event_create_component_1.CreateSportEventComponent, sport_event_created_component_1.CreatedSportEventComponent, sport_event_going_component_1.GoingSportEventComponent,
                        sport_event_all_component_1.SportEventAllComponent, sport_event_detail_component_1.SportEventDetailComponent, sport_event_near_component_1.NearSportEventComponent],
                    imports: [ng2_datetime_picker_1.Ng2DatetimePickerModule, forms_1.FormsModule, angular2_infinite_scroll_1.InfiniteScrollModule, sport_event_routing_module_1.SportEventRoutingModule, common_1.CommonModule, router_1.RouterModule, core_module_1.AgmCoreModule.forRoot({
                            apiKey: 'AIzaSyCOFjbmcn99Ri2wFYU-YVCWERFTk3mVBmA'
                        }), ng2_imageupload_1.ImageUploadModule]
                })
            ], SportEventModule);
            exports_1("SportEventModule", SportEventModule);
        }
    };
});
//# sourceMappingURL=sport-event.module.js.map