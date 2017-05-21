System.register(["@angular/core", "@angular/router", "./admin.service"], function (exports_1, context_1) {
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
    var core_1, router_1, admin_service_1, AdminLoginComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (admin_service_1_1) {
                admin_service_1 = admin_service_1_1;
            }
        ],
        execute: function () {
            AdminLoginComponent = class AdminLoginComponent {
                constructor(adminService, router) {
                    this.adminService = adminService;
                    this.router = router;
                    this.loginFail = false;
                }
                login(username, password) {
                    console.log(event);
                    console.log(username);
                    console.log(password);
                    this.adminService.login(username, password).then(log => {
                        console.log(log),
                            localStorage.setItem('admin_id', log.Id);
                        this.router.navigate(['adminHome']);
                    }).catch(error => {
                        console.log(error.text());
                        this.loginFail = true;
                    });
                }
            };
            AdminLoginComponent = __decorate([
                core_1.Component({
                    selector: 'admin-login',
                    templateUrl: 'app/admin/admin-login.component.html',
                    providers: [admin_service_1.AdminService]
                }),
                __metadata("design:paramtypes", [admin_service_1.AdminService, router_1.Router])
            ], AdminLoginComponent);
            exports_1("AdminLoginComponent", AdminLoginComponent);
        }
    };
});
//# sourceMappingURL=admin-login.component.js.map