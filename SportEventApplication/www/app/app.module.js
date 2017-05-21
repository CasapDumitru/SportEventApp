System.register(["@angular/core", "@angular/platform-browser", "./app.component", "@angular/http", "./app-routing.module", "./not-found/not-found.module", "./StartPage/startpage.module", "./login/login.module", "./admin/admin.module", "./adminHome/admin-home.module"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, app_component_1, http_1, app_routing_module_1, not_found_module_1, startpage_module_1, login_module_1, admin_module_1, admin_home_module_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_routing_module_1_1) {
                app_routing_module_1 = app_routing_module_1_1;
            },
            function (not_found_module_1_1) {
                not_found_module_1 = not_found_module_1_1;
            },
            function (startpage_module_1_1) {
                startpage_module_1 = startpage_module_1_1;
            },
            function (login_module_1_1) {
                login_module_1 = login_module_1_1;
            },
            function (admin_module_1_1) {
                admin_module_1 = admin_module_1_1;
            },
            function (admin_home_module_1_1) {
                admin_home_module_1 = admin_home_module_1_1;
            }
        ],
        execute: function () {
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule, not_found_module_1.NotFoundModule, login_module_1.LoginModule, startpage_module_1.StartPageModule, admin_module_1.AdminModule, admin_home_module_1.AdminHomeModule],
                    declarations: [app_component_1.AppComponent],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map