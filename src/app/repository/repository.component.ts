import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { UserService } from '../user-http/user.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repository: Repository;
  public searchForRepository: string;


  searchForRepositories() {
    this.searchForRepository = '';
  }

  constructor(public repositoryRequest: UserService) { }

  ngOnInit(): void {
    this.repositoryRequest.searchRepoRequest(this.searchForRepository);
  }

}
