import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Username } from '../username';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {
  searchUsername = new Username("")
  constructor() { }

  @Output() searching = new EventEmitter<Username>();

  search(term) {
    this.searching.emit(term.value.username);
    term.reset();

  }
  ngOnInit(): void {
  }

}
