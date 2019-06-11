import { GithubApiService } from './GithubApiService'
import { User } from './User';
import { Repo } from './Repo';
import * as _ from 'lodash'

let svc: GithubApiService = new GithubApiService()
// 获取用户名
// console.log(process.argv)
if (process.argv.length < 3) {
  console.log('必须输入用户名')
} else {
  svc.getUserInfo(process.argv[2], (user: User) => {
    svc.getRepos(user.login, (repos: Repo[]) => {
      let sortdRepos = _.sortBy(repos, [(repo: Repo) => repo.size])
      user.repos = sortdRepos
      console.log(user)
    })
  })
}
