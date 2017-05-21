System.register(["@angular/core", "./../sport/sport.service"], function (exports_1, context_1) {
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
    var core_1, sport_service_1, AdminSportComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sport_service_1_1) {
                sport_service_1 = sport_service_1_1;
            }
        ],
        execute: function () {
            AdminSportComponent = class AdminSportComponent {
                constructor(sportService) {
                    this.sportService = sportService;
                    this.name = "The name of sports is";
                }
                getSports() {
                    this.sportService.getSports().then(newSports => {
                        console.log(newSports);
                        this.sports = newSports;
                    }).catch(error => {
                        console.log("An error");
                    });
                }
                AddSport() {
                    console.log("post");
                    this.sportService.postSport(this.newSport).then(sport => {
                        console.log(sport),
                            this.sports.push(sport);
                    }).catch(error => console.log("error"));
                }
                DeleteSport(id, index) {
                    this.sportService.deleteSport(id).then(res => {
                        console.log(res);
                        this.sports.splice(index, 1);
                    }).catch(er => {
                        console.log(er);
                    });
                }
                ngOnInit() {
                    console.log("Initss");
                    this.getSports();
                    this.newSport = {
                        Id: null,
                        Name: null
                    };
                }
            };
            AdminSportComponent = __decorate([
                core_1.Component({
                    selector: 'admin-sports',
                    templateUrl: 'app/adminSports/admin-sport.component.html',
                    providers: [sport_service_1.SportService]
                }),
                __metadata("design:paramtypes", [sport_service_1.SportService])
            ], AdminSportComponent);
            exports_1("AdminSportComponent", AdminSportComponent);
        }
    };
});
//# sourceMappingURL=admin-sport.component.js.map