System.register(["@angular/core", "./startpage.service", "./../account/account.service", "@angular/router", "./../google-maps/google-map.service"], function (exports_1, context_1) {
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
    var core_1, startpage_service_1, account_service_1, router_1, google_map_service_1, StartPageComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (startpage_service_1_1) {
                startpage_service_1 = startpage_service_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (google_map_service_1_1) {
                google_map_service_1 = google_map_service_1_1;
            }
        ],
        execute: function () {
            StartPageComponent = class StartPageComponent {
                constructor(startPageService, accountService, router, googleMapService) {
                    this.startPageService = startPageService;
                    this.accountService = accountService;
                    this.router = router;
                    this.googleMapService = googleMapService;
                    this.title = 'My first angular2-google-maps project';
                    this.lat = 51.678418;
                    this.lng = 7.809007;
                    this.loginId = 10;
                    this.m = {
                        lat: 0,
                        lng: 0,
                        label: "L",
                        draggable: false
                    };
                    this.existAccount = false;
                    this.loginFail = false;
                }
                update() {
                    this.x = 10;
                    this.y = 20;
                }
                clickedMarker(lat, label, index) {
                    console.log(`clicked the marker: ${label || index}}`);
                    console.log(lat);
                    console.log(this.loginId);
                }
                mapClicked($event) {
                    console.log($event.coords);
                    this.m.lat = $event.coords.lat;
                    this.m.lng = $event.coords.lng;
                    this.setAddress(this.m.lat, this.m.lng);
                }
                setAddress(lat, lng) {
                    this.googleMapService.getAdress(lat, lng).then(adress => {
                        this.newAccount.Adress.address = adress.results[0].formatted_address;
                    }).catch(error => {
                        console.log("An error");
                    });
                }
                SignUp() {
                    this.newAccount.Adress.latitude = this.m.lat;
                    this.newAccount.Adress.longitude = this.m.lng;
                    console.log(this.newAccount);
                    this.accountService.postAccount(this.newAccount).then(ac => {
                        console.log("nowwwwwww");
                        console.log(ac);
                        console.log(ac.Id);
                        localStorage.setItem('id_token', ac.Id);
                        this.router.navigate(['home']);
                    }).catch(er => {
                        console.log(er);
                        this.existAccount = true;
                    });
                }
                SignIn() {
                    console.log(this.loginUserName);
                    console.log(this.loginPassword);
                    this.startPageService.login(this.loginUserName, this.loginPassword).then(log => {
                        console.log(log),
                            localStorage.setItem('id_token', log.Id);
                        this.router.navigate(['home']);
                    }).catch(error => {
                        console.log(error.text());
                        this.loginFail = true;
                    });
                }
                ngOnInit() {
                    this.newAccount = {
                        Id: null,
                        FirstName: null,
                        LastName: null,
                        UserName: null,
                        Email: null,
                        Password: null,
                        Adress: {
                            Id: null,
                            latitude: null,
                            longitude: null,
                            address: null
                        }
                    };
                }
            };
            StartPageComponent = __decorate([
                core_1.Component({
                    selector: 'startpage',
                    templateUrl: 'app/startpage/startpage.component.html',
                    styleUrls: ['app/startpage/startpage.style.css'],
                    providers: [startpage_service_1.StartPageService, account_service_1.AccountService, google_map_service_1.GoogleMapService]
                }),
                __metadata("design:paramtypes", [startpage_service_1.StartPageService, account_service_1.AccountService,
                    router_1.Router, google_map_service_1.GoogleMapService])
            ], StartPageComponent);
            exports_1("StartPageComponent", StartPageComponent);
        }
    };
});
//# sourceMappingURL=startpage.component.js.map