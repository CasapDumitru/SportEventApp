System.register(["@angular/core", "./sport.component", "@angular/common", "@angular/router", "./search-pipe", "./sport.service", "@angular/forms"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, sport_component_1, common_1, router_1, search_pipe_1, sport_service_1, forms_1, SportModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sport_component_1_1) {
                sport_component_1 = sport_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            },
            function (sport_service_1_1) {
                sport_service_1 = sport_service_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }
        ],
        execute: function () {
            SportModule = class SportModule {
            };
            SportModule = __decorate([
                core_1.NgModule({
                    declarations: [sport_component_1.SportComponent, search_pipe_1.SearchPipe],
                    imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule],
                    providers: [sport_service_1.SportService]
                })
            ], SportModule);
            exports_1("SportModule", SportModule);
        }
    };
});
//# sourceMappingURL=sport.module.js.map