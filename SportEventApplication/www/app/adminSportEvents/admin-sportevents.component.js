System.register(["@angular/core", "./../sport-event/sport-event.service", "@angular/platform-browser"], function (exports_1, context_1) {
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
    var core_1, sport_event_service_1, platform_browser_1, AdminSportEventComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sport_event_service_1_1) {
                sport_event_service_1 = sport_event_service_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }
        ],
        execute: function () {
            AdminSportEventComponent = class AdminSportEventComponent {
                constructor(sportEventService, sanitizer) {
                    this.sportEventService = sportEventService;
                    this.sanitizer = sanitizer;
                    this.sportEvents = [];
                    this.ready = false;
                }
                getSportEvents() {
                    this.sportEventService.getSportEvents().then(sp => {
                        console.log(sp);
                        this.sportEvents = sp;
                        this.ready = true;
                    }).catch(er => {
                        console.log(er);
                    });
                }
                DeleteSportEvent(id, index) {
                    this.sportEventService.deleteSportEvent(id).then(res => {
                        console.log(res);
                        this.sportEvents.splice(index, 1);
                    }).catch(er => {
                        console.log(er);
                    });
                }
                ngOnInit() {
                    this.getSportEvents();
                }
            };
            AdminSportEventComponent = __decorate([
                core_1.Component({
                    selector: 'admin-sportevents',
                    templateUrl: 'app/adminSportEvents/admin-sportevents.component.html',
                    styleUrls: ['app/adminSportEvents/admin-sportevents.style.css'],
                    providers: [sport_event_service_1.SportEventService]
                }),
                __metadata("design:paramtypes", [sport_event_service_1.SportEventService, platform_browser_1.DomSanitizer])
            ], AdminSportEventComponent);
            exports_1("AdminSportEventComponent", AdminSportEventComponent);
        }
    };
});
//# sourceMappingURL=admin-sportevents.component.js.map