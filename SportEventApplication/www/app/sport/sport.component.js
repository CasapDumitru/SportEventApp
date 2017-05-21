System.register(["@angular/core", "./sport.service"], function (exports_1, context_1) {
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
    var core_1, sport_service_1, SportComponent;
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
            SportComponent = class SportComponent {
                constructor(sportService) {
                    this.sportService = sportService;
                    this.name = "The name of sports is";
                }
                getSports() {
                    this.sportService.getSports().then(newSports => {
                        this.sports = newSports;
                    }).catch(error => {
                        console.log("An error");
                    });
                }
                getInterestSports() {
                    this.sportService.GetSportInterest(localStorage.getItem('id_token')).then(sp => {
                        this.interests = sp;
                        console.log(this.interests);
                    }).catch(error => {
                        console.log("An error");
                    });
                }
                checkboxevent(event, id) {
                    console.log(event);
                    console.log(id);
                    if (event) {
                        this.sportService.addInterest(localStorage.getItem('id_token'), id);
                    }
                    else {
                        this.sportService.removeInterest(localStorage.getItem('id_token'), id);
                    }
                }
                isInterest(sportId) {
                    console.log("entert function");
                    console.log(sportId);
                    console.log(this.interests);
                    var sp = this.interests.find(a => a.Id == sportId);
                    if (sp == undefined)
                        return false;
                    return true;
                }
                ngOnInit() {
                    console.log("Initss");
                    this.getInterestSports();
                }
            };
            SportComponent = __decorate([
                core_1.Component({
                    selector: 'sports',
                    templateUrl: 'app/sport/sport.component.html',
                    providers: [sport_service_1.SportService]
                }),
                __metadata("design:paramtypes", [sport_service_1.SportService])
            ], SportComponent);
            exports_1("SportComponent", SportComponent);
        }
    };
});
//# sourceMappingURL=sport.component.js.map