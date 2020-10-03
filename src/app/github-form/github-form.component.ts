import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {
  searchUsername = new User("")
  constructor() { }

  @Output() searching = new EventEmitter<User>();

  search(term) {
    this.searching.emit(term.value.username);
    term.reset();

  }
  ngOnInit(): void {
  }

}
