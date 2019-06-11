"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(userResponseBody) {
        this.repos = [];
        this.login = userResponseBody.login;
        this.fullName = userResponseBody.fullName;
        this.public_repos = userResponseBody.public_repos;
        this.followers = userResponseBody.followers;
    }
    return User;
}());
exports.User = User;
