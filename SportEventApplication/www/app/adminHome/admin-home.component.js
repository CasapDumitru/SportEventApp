System.register(["@angular/core", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, router_1, AdminHomeComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            AdminHomeComponent = class AdminHomeComponent {
                constructor(router) {
                    this.router = router;
                }
                logout() {
                    console.log("LOGOUT");
                    localStorage.removeItem('admin_id');
                }
                ngOnInit() {
                    if (localStorage.getItem('admin_id') == null)
                        this.router.navigate(['admin']);
                    console.log("HOME!!!");
                }
            };
            AdminHomeComponent = __decorate([
                core_1.Component({
                    selector: 'adminhome',
                    templateUrl: "app/adminHome/admin-home.component.html",
                }),
                __metadata("design:paramtypes", [router_1.Router])
            ], AdminHomeComponent);
            exports_1("AdminHomeComponent", AdminHomeComponent);
        }
    };
});
//# sourceMappingURL=admin-home.component.js.map