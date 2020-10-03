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
    this.users = new User("", "", "", "", 0, new Date());
  }
  userRequest(data) {
    interface ApiResponse {
      name: string;
      login: string;
      html_url: string;
      avatar_url: string;
      public_repos: number;
      created_at: Date;


    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/users/` + data + `?access_token=` + environment.apiKey)
        .toPromise().then(response => {
          this.users.name = response.name;
          this.users.login = response.login;
          this.users.html_url = response.html_url;
          this.users.avatar_url = response.avatar_url;
          this.users.public_repos = response.public_repos;
          this.users.created_at = response.created_at;
          resolve()
        },
          error => {
            this.users.name = "Bad Credentiials"
            this.users.login = "Bad Credentials"
            this.users.avatar_url = "Bad Credentials"
            this.users.public_repos = 0

            reject(error)

          })
    })
    return promise;
  }
}
