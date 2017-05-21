System.register(["@angular/core", "./sport-event.service", "@angular/router", "@angular/platform-browser"], function (exports_1, context_1) {
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
    var core_1, sport_event_service_1, router_1, platform_browser_1, SportEventAllComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sport_event_service_1_1) {
                sport_event_service_1 = sport_event_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }
        ],
        execute: function () {
            SportEventAllComponent = class SportEventAllComponent {
                constructor(sportEventService, router, r, sanitizer) {
                    this.sportEventService = sportEventService;
                    this.router = router;
                    this.r = r;
                    this.sanitizer = sanitizer;
                    this.sportEvents = [];
                    this.pageNumber = 1;
                    this.ready = false;
                    this.finishScroll = false;
                }
                goToDetail(id) {
                    console.log("go to detail" + id);
                    this.router.navigate(['../detail', id], { relativeTo: this.r });
                }
                getAPage() {
                    this.sportEventService.getSportEventInterestedByPage(6, this.pageNumber, localStorage.getItem('id_token')).then(sEv => {
                        var length = this.sportEvents.length;
                        this.sportEvents.push.apply(this.sportEvents, sEv);
                        if (length == this.sportEvents.length)
                            this.finishScroll = true;
                        else
                            this.pageNumber++;
                        this.ready = true;
                    }).catch(error => console.log("an error"));
                }
                onScrollDown() {
                    if (this.finishScroll == false) {
                        this.getAPage();
                        console.log('get on scroll down');
                    }
                    console.log('scrolled down!!');
                }
                ngOnInit() {
                    console.log("All Sport Event COmponents");
                    this.getAPage();
                }
            };
            SportEventAllComponent = __decorate([
                core_1.Component({
                    styles: [
                        `.search-results {
            height: 50rem;
            overflow: scroll;
        }`
                    ],
                    selector: 'sportevent',
                    templateUrl: 'app/sport-event/sport-event.all.component.html',
                    styleUrls: ['app/sport-event/sport-event.style.css'],
                    providers: [sport_event_service_1.SportEventService]
                }),
                __metadata("design:paramtypes", [sport_event_service_1.SportEventService, router_1.Router, router_1.ActivatedRoute,
                    platform_browser_1.DomSanitizer])
            ], SportEventAllComponent);
            exports_1("SportEventAllComponent", SportEventAllComponent);
        }
    };
});
//# sourceMappingURL=sport-event.all.component.js.map