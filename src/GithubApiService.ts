import * as  request from 'request'
import { User } from './User'
import { Repo } from './Repo';

const options = {
  headers: {
    'User-Agent': 'request'
  },
  json: true
};
export class GithubApiService {
  getUserInfo(userName: string, cb: (user: User) => any) {
    request.get(`https://api.github.com/users/${userName}`, options, (error: any, response: any, body: any) => {
      // let user: User = new User(JSON.parse(body));
      let user: User = new User(body);
      cb(user)
    })
  }
  getRepos(userName: string, cb: (repos: Repo[]) => any) {
    request.get(`https://api.github.com/users/${userName}/repos`, options, (error: any, response: any, body: any) => {
      let repos: Repo[] = body.map((item: any) => new Repo(item));
      cb(repos)
    })
  }
}

