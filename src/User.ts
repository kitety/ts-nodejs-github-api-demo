export class User {
  login: string
  fullName: string
  public_repos: number
  followers: number
  constructor(userResponseBody: any) {
    this.login = userResponseBody.login
    this.fullName = userResponseBody.fullName
    this.public_repos = userResponseBody.public_repos
    this.followers = userResponseBody.followers
  }
}
