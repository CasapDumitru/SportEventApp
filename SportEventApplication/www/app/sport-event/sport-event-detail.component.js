System.register(["@angular/core", "./sport-event.service", "@angular/router", "./../google-maps/google-map.service", "@angular/platform-browser", "./../account/account.service"], function (exports_1, context_1) {
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
    var core_1, sport_event_service_1, router_1, google_map_service_1, platform_browser_1, account_service_1, SportEventDetailComponent;
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
            function (google_map_service_1_1) {
                google_map_service_1 = google_map_service_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            }
        ],
        execute: function () {
            SportEventDetailComponent = class SportEventDetailComponent {
                constructor(sportEventService, route, router, googleMapService, sanitizer, accountService) {
                    this.sportEventService = sportEventService;
                    this.route = route;
                    this.router = router;
                    this.googleMapService = googleMapService;
                    this.sanitizer = sanitizer;
                    this.accountService = accountService;
                    this.ready = false;
                    this.accountId = +localStorage.getItem('id_token');
                    this.simpleAccount = {
                        Id: null,
                        FullName: null
                    };
                }
                getAccount() {
                    this.accountService.getAccount(localStorage.getItem('id_token')).then(ac => {
                        this.simpleAccount.Id = ac.Id;
                        this.simpleAccount.FullName = ac.FullName;
                        console.log(ac);
                        console.log(this.simpleAccount);
                    });
                }
                getSportEventById(id) {
                    this.sportEventService.getDetailSportEvent(id, this.accountId).then(sEv => {
                        this.sportEvent = sEv;
                        /*this.simpleAccount.Id = this.sportEvent.Owner.Id;
                        this.simpleAccount.FullName = this.sportEvent.Owner.FullName;*/
                        if (this.sportEvent.ImagePath == null)
                            this.sportEvent.ImagePath = "noimage.jpg";
                        var img = this.sportEvent.ImagePath.split('.');
                        this.sportEventService.getimage(img[0], img[1]).then(im => {
                            console.log(im);
                            this.imag = im;
                            this.sportEvent.ImageBase64 = this.imag._body.substring(1, this.imag._body.length - 1);
                            this.ready = true;
                        });
                    }).catch(error => {
                        console.log("An error");
                    });
                }
                Going() {
                    this.sportEvent.Going = true;
                    this.sportEvent.Attendees.push(this.simpleAccount);
                    this.sportEventService.going(this.sportEventId, localStorage.getItem('id_token')).then(sEv => console.log(sEv)).catch(er => console.log(er));
                }
                NotGoing() {
                    this.sportEvent.Going = false;
                    this.sportEvent.Attendees.pop();
                    this.sportEventService.notgoing(this.sportEventId, localStorage.getItem('id_token')).then(sEv => console.log(sEv)).catch(er => console.log(er));
                }
                mapClicked($event) {
                    if (this.accountId == this.sportEvent.Owner.Id) {
                        this.sportEvent.Adress.latitude = $event.coords.lat;
                        this.sportEvent.Adress.longitude = $event.coords.lng;
                        this.setAddress(this.sportEvent.Adress.latitude, this.sportEvent.Adress.longitude);
                    }
                }
                setAddress(lat, lng) {
                    this.googleMapService.getAdress(lat, lng).then(adress => {
                        this.sportEvent.Adress.address = adress.results[0].formatted_address;
                    }).catch(error => {
                        console.log("An error");
                    });
                }
                EditSpEvent() {
                    console.log(this.sportEvent);
                    this.sportEventService.editSportEvent(this.sportEvent).then(spEv => console.log(spEv)).catch(er => console.log(er));
                }
                ngOnInit() {
                    this.getAccount();
                    this.route.params.subscribe(params => {
                        this.sportEventId = +params['id'];
                        this.getSportEventById(+params['id']);
                    });
                }
            };
            SportEventDetailComponent = __decorate([
                core_1.Component({
                    selector: 'sportevent',
                    templateUrl: 'app/sport-event/sport-event-detail.component.html',
                    providers: [sport_event_service_1.SportEventService, google_map_service_1.GoogleMapService, account_service_1.AccountService]
                }),
                __metadata("design:paramtypes", [sport_event_service_1.SportEventService, router_1.ActivatedRoute,
                    router_1.Router, google_map_service_1.GoogleMapService, platform_browser_1.DomSanitizer,
                    account_service_1.AccountService])
            ], SportEventDetailComponent);
            exports_1("SportEventDetailComponent", SportEventDetailComponent);
        }
    };
});
//# sourceMappingURL=sport-event-detail.component.js.map