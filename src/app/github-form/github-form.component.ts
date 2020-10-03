import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {
  newSearch = "";
  constructor() { }

  @Output() searchTerm = new EventEmitter<String>();

  search() {
    this.searchTerm.emit(this.newSearch)

  }
  ngOnInit(): void {
  }

}
