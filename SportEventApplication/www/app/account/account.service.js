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
    var core_1, http_1, http_2, AccountService;
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
            AccountService = class AccountService {
                constructor(http) {
                    this.http = http;
                }
                postAccount(account) {
                    console.log("POSSST!!!");
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(account);
                    return this.http.post("http://localhost:61957/api/SignUpAccount", body, options).map(res => res.json()).toPromise();
                }
                getAccounts() {
                    return this.http.get('http://localhost:61957/api/SignUpAccount')
                        .map(res => res.json()).toPromise();
                }
                getAccount(id) {
                    return this.http.get('http://localhost:61957/api/Account/' + id)
                        .map(res => res.json()).toPromise();
                }
                getInterests(id) {
                    return this.http.get('http://localhost:61957/api/Account/GetMySportInterest/' + id)
                        .map(res => res.json()).toPromise();
                }
                getCreatedSportEvents(pageSize, pageNumber, id) {
                    return this.http.get('http://localhost:61957/api/Account/GetCreatedSportEvents/' + pageSize + '/'
                        + pageNumber + '/' + id)
                        .map(res => res.json()).toPromise();
                }
                getGoingSportEvents(pageSize, pageNumber, id) {
                    return this.http.get('http://localhost:61957/api/Account/GetGoingSportEvents/' + pageSize + '/'
                        + pageNumber + '/' + id)
                        .map(res => res.json()).toPromise();
                }
                getSignUpAccount(id) {
                    return this.http.get('http://localhost:61957/api/SignUpAccount/' + id)
                        .map(res => res.json()).toPromise();
                }
                editAccount(account) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(account);
                    return this.http.put("http://localhost:61957/api/SignUpAccount", body, options).map(res => res.json()).toPromise();
                }
            };
            AccountService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], AccountService);
            exports_1("AccountService", AccountService);
        }
    };
});
//# sourceMappingURL=account.service.js.map