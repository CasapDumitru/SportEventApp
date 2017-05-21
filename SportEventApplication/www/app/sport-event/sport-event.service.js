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
    var core_1, http_1, http_2, SportEventService;
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
            SportEventService = class SportEventService {
                constructor(http) {
                    this.http = http;
                }
                getSportEvents() {
                    return this.http.get('http://localhost:61957/api/sportevent')
                        .map(res => res.json()).toPromise();
                }
                getSportEvent(id) {
                    return this.http.get('http://localhost:61957/api/sportevent/' + id)
                        .map(res => res.json()).toPromise();
                }
                getSportByPage(pageSize, pageNumber) {
                    return this.http.get('http://localhost:61957/api/sportevent/GetByPage/' + pageSize + '/' + pageNumber)
                        .map(res => res.json()).toPromise();
                }
                postSportEvent(sportEvent) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(sportEvent);
                    return this.http.post("http://localhost:61957/api/SportEvent", body, options).map(res => res.json()).toPromise();
                }
                getSportEventInterested(ids) {
                    return this.http.get('http://localhost:61957/api/sportevent/GetInterested/' + ids)
                        .map(res => res.json()).toPromise();
                }
                getSportEventInterestedByPage(pageSize, pageNumber, userId) {
                    return this.http.get('http://localhost:61957/api/sportevent/GetInterestedByPage/' + pageSize + '/' + pageNumber
                        + '/' + userId)
                        .map(res => res.json()).toPromise();
                }
                getSportEventCreatedByPage(pageSize, pageNumber, userId) {
                    return this.http.get('http://localhost:61957/api/sportevent/GetCreatedByPage/' + pageSize + '/' + pageNumber
                        + '/' + userId)
                        .map(res => res.json()).toPromise();
                }
                getDetailSportEvent(sportEvId, userId) {
                    return this.http.get('http://localhost:61957/api/SportEventDetail/Get/' + sportEvId + '/' + userId)
                        .map(res => res.json()).toPromise();
                }
                going(sportEvId, userId) {
                    return this.http.get('http://localhost:61957/api/SportEvent/Going/' + sportEvId + '/' + userId)
                        .map(res => res.json()).toPromise();
                }
                notgoing(sportEvId, userId) {
                    return this.http.get('http://localhost:61957/api/SportEvent/NotGoing/' + sportEvId + '/' + userId)
                        .map(res => res.json()).toPromise();
                }
                editSportEvent(sportEvent) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(sportEvent);
                    return this.http.put("http://localhost:61957/api/SportEventDetail", body, options).map(res => res.json()).toPromise();
                }
                getNearSportEventByPage(pageSize, pageNumber, lat, lng) {
                    return this.http.get('http://localhost:61957/api/sportevent/GetNearByPage/' + pageSize + '/' + pageNumber
                        + '/' + lat + '/' + lng + '/')
                        .map(res => res.json()).toPromise();
                }
                postImage(image, name) {
                    console.log("POSST IMAGE");
                    let input = new FormData();
                    input.append("file", image);
                    return this.http.post("http://localhost:61957/api/Image/PostImage/" + name, input).map(res => res.json()).toPromise();
                    ;
                }
                getimage(name, ext) {
                    return this.http.get('http://localhost:61957/api/Image/Get/' + name + '/' + ext).toPromise();
                }
                deleteSportEvent(sportId) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    return this.http.delete("http://localhost:61957/api/SportEvent/" + sportId, options)
                        .map(res => res.json()).toPromise();
                }
            };
            SportEventService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], SportEventService);
            exports_1("SportEventService", SportEventService);
        }
    };
});
//# sourceMappingURL=sport-event.service.js.map