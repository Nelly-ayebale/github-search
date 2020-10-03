import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-http/user.service';
import { User } from '../user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  public user = 'Nelly-ayebale';

  users: User;

  finduserRequest(username) {

    this.user = username;
    this.ngOnInit();
  }
  constructor(public userServiceRequest: UserService) { }


  ngOnInit(): void {
    this.userServiceRequest.userRequest(this.user);
    this.users = this.userServiceRequest.users;

  }


}
