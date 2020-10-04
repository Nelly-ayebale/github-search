import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';
import { Repository } from '../repository';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User;
  repository: Repository;
  constructor(private http: HttpClient) {
    this.users = new User("", "", "", "", 0, new Date());
    this.repository = new Repository("", "", "", "", "", new Date());
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

  repoRequest(term) {
    interface ApiResponse {
      name: string;
      html_url: string;
      description: string;
      languages_url: string;
      collaborators_url: string;
      created_at: Date;
    }
    let newPromise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/users/` + term + `/repos?access_token` + environment.apiKey)
        .toPromise().then(getResponse => {
          this.repository.name = getResponse.name;
          this.repository.html_url = getResponse.html_url;
          this.repository.description = getResponse.description;
          this.repository.languages_url = getResponse.languages_url;
          this.repository.collaborators_url = getResponse.collaborators_url;
          this.repository.created_at = getResponse.created_at;

          resolve()
        },
          error => {
            this.repository.name = "Can't Load"
            this.repository.html_url = "Can't Load"
            this.repository.description = "Can't Load"
            this.repository.languages_url = "Can't Load"
            this.repository.collaborators_url = "Can't Load"
            this.repository.created_at = new Date()

            reject(error)

          })
    })
    return newPromise;
  }
}


