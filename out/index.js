"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var _ = __importStar(require("lodash"));
var svc = new GithubApiService_1.GithubApiService();
// 获取用户名
// console.log(process.argv)
if (process.argv.length < 3) {
    console.log('必须输入用户名');
}
else {
    svc.getUserInfo(process.argv[2], function (user) {
        svc.getRepos(user.login, function (repos) {
            var sortdRepos = _.sortBy(repos, [function (repo) { return repo.size; }]);
            user.repos = sortdRepos;
            console.log(user);
        });
    });
}
