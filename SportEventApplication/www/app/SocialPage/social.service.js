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
    var core_1, http_1, http_2, SocialService;
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
            SocialService = class SocialService {
                constructor(http) {
                    this.http = http;
                }
                getAccounts() {
                    return this.http.get('http://localhost:61957/api/account')
                        .map(res => res.json()).toPromise();
                }
                getFriends(id) {
                    return this.http.get('http://localhost:61957/api/friendship/getFriends/' + id)
                        .map(res => res.json()).toPromise();
                }
                getDetailUser(userId, friendId) {
                    return this.http.get('http://localhost:61957/api/friendship/getFriendDetail/' + userId + '/' + friendId)
                        .map(res => res.json()).toPromise();
                }
                addFriend(userId, friendId) {
                    return this.http.get('http://localhost:61957/api/friendship/AddFriend/' + userId + '/' + friendId)
                        .map(res => res.json()).toPromise();
                }
                removeFriend(userId, friendId) {
                    return this.http.get('http://localhost:61957/api/friendship/RemoveFriend/' + userId + '/' + friendId)
                        .map(res => res.json()).toPromise();
                }
                getMessagesByPage(pageSize, pageNumber, userOneId, userTwoId) {
                    return this.http.get('http://localhost:61957/api/messenger/GetMessages/' + pageSize + '/' + pageNumber
                        + '/' + userOneId + '/' + userTwoId).map(res => res.json()).toPromise();
                }
                getOrCreateConversation(userOneId, userTwoId) {
                    return this.http.get('http://localhost:61957/api/messenger/GetConversation/' + '/' + userOneId + '/'
                        + userTwoId).map(res => res.json()).toPromise();
                }
                postMessage(message) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(message);
                    return this.http.post("http://localhost:61957/api/messenger/SendMessage", body, options).map(res => res.json()).toPromise();
                }
            };
            SocialService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], SocialService);
            exports_1("SocialService", SocialService);
        }
    };
});
//# sourceMappingURL=social.service.js.map