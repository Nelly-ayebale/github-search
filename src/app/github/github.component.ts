import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-http/user.service';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  public user = 'Nelly-ayebale';
  public searchForRepository: string;
  users: User;
  repositories: Repository;

  finduserRequest(username) {

    this.user = username;
    this.ngOnInit();
  }
  constructor(public userServiceRequest: UserService, public repoServiceRequest: UserService) { }


  ngOnInit(): void {
    this.userServiceRequest.userRequest(this.user);
    this.users = this.userServiceRequest.users;
    this.repoServiceRequest.repoRequest(this.user);
    console.log(this.repoServiceRequest);
  }
  searchForRepositories() {
    this.searchForRepository = ""
  }

}
