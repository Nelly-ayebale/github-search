import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user-http/user.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.userService.userRequest()
    this.user = this.userService.user
  }


}
