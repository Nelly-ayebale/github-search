import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  constructor(private http: HttpClient) {
    this.user = new User(0, "", "", "");
  }
  userRequest() {
    interface ApiResponse {
      id: number;
      login: string;
      avatar: string;
      url: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl)
        .toPromise().then(response => {
          this.user.id = response.id
          this.user.login = response.login
          this.user.avatar = response.avatar
          this.user.url = response.url

          resolve()
        },
          error => {
            this.user.id = 0
            this.user.login = "Bad Credentials"
            this.user.avatar = "Bad Credentials"
            this.user.url = "Bad Credentials"

            reject(error)

          })
    })
    return promise;
  }
}
