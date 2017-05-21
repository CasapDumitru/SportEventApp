System.register(["@angular/core", "@angular/router", "@angular/http", "rxjs/Rx"], function (exports_1, context_1) {
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
    var core_1, router_1, http_1, LoginComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            LoginComponent = class LoginComponent {
                constructor(router, http) {
                    this.router = router;
                    this.http = http;
                }
                login(event, username, password) {
                    event.preventDefault();
                    console.log("Login!!!!!");
                    console.log(username);
                    console.log(password);
                    this.http.get('http://localhost:61957/api/account/login/' + username + '/' + password)
                        .map(res => res.json()).toPromise().then(ac => {
                        console.log(ac),
                            localStorage.setItem('id_token', ac.Id);
                        this.router.navigate(['home']);
                    }).catch(error => console.log(error.text()));
                    /*let body = JSON.stringify({ username, password });
                    this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
                      .subscribe(
                        response => {
                          localStorage.setItem('id_token', response.json().id_token);
                          this.router.navigate(['home']);
                        },
                        error => {
                          alert(error.text());
                          console.log(error.text());
                        }
                      );*/
                }
                signup(event) {
                    event.preventDefault();
                    this.router.navigate(['signup']);
                }
            };
            LoginComponent = __decorate([
                core_1.Component({
                    selector: 'login',
                    templateUrl: "app/login/login.component.html"
                }),
                __metadata("design:paramtypes", [router_1.Router, http_1.Http])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    };
});
//# sourceMappingURL=login.component.js.map