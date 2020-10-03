import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User;
  constructor(private http: HttpClient) {
    this.users = new User("", "", "", 0);
  }
  userRequest(data) {
    interface ApiResponse {
      name: string;
      login: string;
      avatar: string;
      public_repos: number;


    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/users/` + data + `?access_token=` + environment.apiKey)
        .toPromise().then(response => {
          this.users.name = response.name;
          this.users.login = response.login;
          this.users.avatar = response.avatar;
          this.users.public_repos = response.public_repos;

          resolve()
        },
          error => {
            this.users.name = "Bad Credentiials"
            this.users.login = "Bad Credentials"
            this.users.avatar = "Bad Credentials"
            this.users.public_repos = 0

            reject(error)

          })
    })
    return promise;
  }
}
