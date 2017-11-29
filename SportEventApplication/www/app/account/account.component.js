System.register(["@angular/core", "./account.service", "./../google-maps/google-map.service"], function (exports_1, context_1) {
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
    var core_1, account_service_1, google_map_service_1, AccountComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (google_map_service_1_1) {
                google_map_service_1 = google_map_service_1_1;
            }
        ],
        execute: function () {
            AccountComponent = class AccountComponent {
                constructor(accountService, googleMapService) {
                    this.accountService = accountService;
                    this.googleMapService = googleMapService;
                    this.ready = false;
                    this.passwordError = false;
                    this.editError = false;
                    this.success = false;
                }
                getAccount() {
                    this.accountService.getSignUpAccount(localStorage.getItem('id_token')).then(ac => {
                        this.account = ac;
                        this.ready = true;
                    }).catch(er => console.log(er));
                }
                valuechange(event) {
                    console.log(event);
                    console.log(this.account);
                }
                mapClicked($event) {
                    console.log($event.coords);
                    this.account.Adress.latitude = $event.coords.lat;
                    this.account.Adress.longitude = $event.coords.lng;
                    this.setAddress(this.account.Adress.latitude, this.account.Adress.longitude);
                    console.log(this.account);
                }
                setAddress(lat, lng) {
                    this.googleMapService.getAdress(lat, lng).then(adress => {
                        this.account.Adress.address = adress.results[0].formatted_address;
                    }).catch(error => {
                        console.log("An error");
                    });
                }
                EditAccount() {
                    this.passwordError = false;
                    this.editError = false;
                    this.success = false;
                    if (this.oldPassword != this.account.Password)
                        this.passwordError = true;
                    else {
                        if (this.newPassword != undefined)
                            this.account.Password = this.newPassword;
                        this.accountService.editAccount(this.account).then(ac => {
                            this.success = true;
                        }).catch(er => {
                            this.editError = true;
                        });
                    }
                }
                ngOnInit() {
                    console.log("Initss Accounts Component");
                    this.getAccount();
                }
            };
            AccountComponent = __decorate([
                core_1.Component({
                    selector: 'account',
                    templateUrl: 'app/account/account.component.html',
                    styleUrls: ['app/account/account.style.css'],
                    providers: [account_service_1.AccountService, google_map_service_1.GoogleMapService],
                }),
                __metadata("design:paramtypes", [account_service_1.AccountService, google_map_service_1.GoogleMapService])
            ], AccountComponent);
            exports_1("AccountComponent", AccountComponent);
        }
    };
});
//# sourceMappingURL=account.component.js.map