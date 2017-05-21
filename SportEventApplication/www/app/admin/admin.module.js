System.register(["@angular/core", "@angular/common", "@angular/router", "@angular/forms", "./admin-login.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, router_1, forms_1, admin_login_component_1, AdminModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (admin_login_component_1_1) {
                admin_login_component_1 = admin_login_component_1_1;
            }
        ],
        execute: function () {
            AdminModule = class AdminModule {
            };
            AdminModule = __decorate([
                core_1.NgModule({
                    declarations: [admin_login_component_1.AdminLoginComponent],
                    imports: [forms_1.FormsModule, common_1.CommonModule, router_1.RouterModule]
                })
            ], AdminModule);
            exports_1("AdminModule", AdminModule);
        }
    };
});
//# sourceMappingURL=admin.module.js.map