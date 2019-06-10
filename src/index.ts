import { GithubApiService } from './GithubApiService'
import { User } from './User';

let svc: GithubApiService = new GithubApiService()
svc.getUserInfo('kitety', (user: User) => {
  console.log(user)
})
