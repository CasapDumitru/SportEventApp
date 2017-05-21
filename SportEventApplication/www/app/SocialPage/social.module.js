System.register(["@angular/core", "./social.component", "./friends.component", "./all-user.component", "./detail-user.component", "./social.routing-module", "@angular/common", "@angular/router", "@angular/forms", "angular2-infinite-scroll"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, social_component_1, friends_component_1, all_user_component_1, detail_user_component_1, social_routing_module_1, common_1, router_1, forms_1, angular2_infinite_scroll_1, SocialModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (social_component_1_1) {
                social_component_1 = social_component_1_1;
            },
            function (friends_component_1_1) {
                friends_component_1 = friends_component_1_1;
            },
            function (all_user_component_1_1) {
                all_user_component_1 = all_user_component_1_1;
            },
            function (detail_user_component_1_1) {
                detail_user_component_1 = detail_user_component_1_1;
            },
            function (social_routing_module_1_1) {
                social_routing_module_1 = social_routing_module_1_1;
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
            function (angular2_infinite_scroll_1_1) {
                angular2_infinite_scroll_1 = angular2_infinite_scroll_1_1;
            }
        ],
        execute: function () {
            SocialModule = class SocialModule {
            };
            SocialModule = __decorate([
                core_1.NgModule({
                    declarations: [social_component_1.SocialComponent, all_user_component_1.AllUserComponent, friends_component_1.FriendsComponent, detail_user_component_1.DetailUserComponent],
                    imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule, social_routing_module_1.SocialRoutingModule, angular2_infinite_scroll_1.InfiniteScrollModule]
                })
            ], SocialModule);
            exports_1("SocialModule", SocialModule);
        }
    };
});
//# sourceMappingURL=social.module.js.map