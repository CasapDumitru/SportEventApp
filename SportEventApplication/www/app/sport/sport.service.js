System.register(["@angular/core", "@angular/http", "rxjs/Rx"], function (exports_1, context_1) {
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
    var core_1, http_1, http_2, SportService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            SportService = class SportService {
                constructor(http) {
                    this.http = http;
                }
                getSports() {
                    return this.http.get('http://localhost:61957/api/Sport')
                        .map(res => res.json()).toPromise();
                }
                postSport(sport) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(sport);
                    return this.http.post("http://localhost:61957/api/Sport", body, options).map(res => res.json()).toPromise();
                }
                GetSportInterest(userId) {
                    return this.http.get('http://localhost:61957/api/Account/GetSportInterest/' + userId)
                        .map(res => res.json()).toPromise();
                }
                setInterest(userId) {
                    this.GetSportInterest(userId).then(inter => {
                        this.interests = inter;
                        console.log("interests=");
                        console.log(this.interests);
                    }).catch(er => console.log(er));
                }
                addInterest(userId, sportId) {
                    this.inter = {
                        id1: userId,
                        id2: sportId
                    };
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(this.inter);
                    return this.http.post("http://localhost:61957/api/Account/AddInterest", body, options).map(res => res.json()).toPromise();
                }
                removeInterest(userId, sportId) {
                    return this.http.get('http://localhost:61957/api/Account/DeleteInterest/' + userId + '/' + sportId)
                        .map(res => res.json()).toPromise();
                }
                deleteSport(sportId) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    return this.http.delete("http://localhost:61957/api/Sport/" + sportId, options)
                        .map(res => res.json()).toPromise();
                }
            };
            SportService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], SportService);
            exports_1("SportService", SportService);
        }
    };
});
//# sourceMappingURL=sport.service.js.map