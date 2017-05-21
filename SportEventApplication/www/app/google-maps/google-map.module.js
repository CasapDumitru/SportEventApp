System.register(["@angular/core", "angular2-google-maps/core/core-module"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, core_module_1, GoogleMapModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_module_1_1) {
                core_module_1 = core_module_1_1;
            }
        ],
        execute: function () {
            GoogleMapModule = class GoogleMapModule {
            };
            GoogleMapModule = __decorate([
                core_1.NgModule({
                    imports: [core_module_1.AgmCoreModule.forRoot({
                            apiKey: 'AIzaSyCOFjbmcn99Ri2wFYU-YVCWERFTk3mVBmA'
                        })]
                })
            ], GoogleMapModule);
            exports_1("GoogleMapModule", GoogleMapModule);
        }
    };
});
//# sourceMappingURL=google-map.module.js.map