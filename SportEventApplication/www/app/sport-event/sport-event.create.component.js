System.register(["@angular/core", "./../sport/sport.service", "./../google-maps/google-map.service", "./../account/account.service", "./sport-event.service"], function (exports_1, context_1) {
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
    var core_1, sport_service_1, google_map_service_1, account_service_1, sport_event_service_1, CreateSportEventComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sport_service_1_1) {
                sport_service_1 = sport_service_1_1;
            },
            function (google_map_service_1_1) {
                google_map_service_1 = google_map_service_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (sport_event_service_1_1) {
                sport_event_service_1 = sport_event_service_1_1;
            }
        ],
        execute: function () {
            CreateSportEventComponent = class CreateSportEventComponent {
                constructor(sportService, googleMapService, acccountService, sportEventService) {
                    this.sportService = sportService;
                    this.googleMapService = googleMapService;
                    this.acccountService = acccountService;
                    this.sportEventService = sportEventService;
                    this.m = {
                        lat: 0,
                        lng: 0,
                        label: "L",
                        draggable: false
                    };
                    this.src = "";
                    this.resizeOptions = {
                        resizeMaxHeight: 128,
                        resizeMaxWidth: 128
                    };
                }
                mapClicked($event) {
                    console.log($event.coords);
                    this.m.lat = $event.coords.lat;
                    this.m.lng = $event.coords.lng;
                    this.setAddress(this.m.lat, this.m.lng);
                }
                setAddress(lat, lng) {
                    console.log(lat);
                    console.log(lng);
                    this.googleMapService.getAdress(lat, lng).then(adress => {
                        this.sportEvent.Adress.address = adress.results[0].formatted_address;
                        this.sportEvent.Adress.latitude = this.m.lat;
                        this.sportEvent.Adress.longitude = this.m.lng;
                    }).catch(error => {
                        console.log("An error");
                    });
                }
                setOwner() {
                    this.acccountService.getAccount(localStorage.getItem('id_token')).then(ac => this.sportEvent.Owner = ac).catch(er => console.log(er));
                }
                getSports() {
                    this.sportService.getSports().then(sp => {
                        this.sports = sp;
                        console.log(this.sports);
                    }).catch(er => console.log(er));
                }
                CreateEvent() {
                    var name = this.sportEvent.Category.Name + this.sportEvent.Adress.address + this.sportEvent.Owner.UserName;
                    console.log(this.image);
                    console.log(name);
                    if (this.image != null) {
                        this.sportEventService.postImage(this.image, name).then(im => console.log("SUccess")).catch(er => console.log(er));
                        var extension = this.image.name.split('.')[1];
                        this.sportEvent.ImagePath = name + '.' + extension;
                    }
                    else {
                        this.sportEvent.ImagePath = "noimage.jpg";
                    }
                    this.sportEventService.postSportEvent(this.sportEvent).then(sp => console.log(sp)).catch(er => console.log(er));
                }
                selected(imageResult) {
                    this.src = imageResult.resized
                        && imageResult.resized.dataURL
                        || imageResult.dataURL;
                    this.image = imageResult.file;
                }
                ngOnInit() {
                    this.sportEvent = {
                        Id: null,
                        Title: null,
                        Date: null,
                        Description: null,
                        Category: {
                            Id: null,
                            Name: null,
                        },
                        Owner: {
                            Id: null,
                            FullName: null,
                            UserName: null,
                            Email: null,
                            Adress: {
                                Id: null,
                                address: null,
                                latitude: null,
                                longitude: null,
                            }
                        },
                        Adress: {
                            Id: null,
                            address: null,
                            latitude: null,
                            longitude: null,
                        },
                        ImagePath: null,
                        ImageBase64: null
                    };
                    this.setOwner();
                    this.getSports();
                }
            };
            CreateSportEventComponent = __decorate([
                core_1.Component({
                    templateUrl: "app/sport-event/sport-event.create.component.html",
                    styleUrls: ['app/sport-event/sport-event.style.css'],
                    providers: [google_map_service_1.GoogleMapService, sport_service_1.SportService, account_service_1.AccountService, sport_event_service_1.SportEventService]
                }),
                __metadata("design:paramtypes", [sport_service_1.SportService, google_map_service_1.GoogleMapService,
                    account_service_1.AccountService, sport_event_service_1.SportEventService])
            ], CreateSportEventComponent);
            exports_1("CreateSportEventComponent", CreateSportEventComponent);
        }
    };
});
//# sourceMappingURL=sport-event.create.component.js.map