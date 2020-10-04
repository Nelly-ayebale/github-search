import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { RepositoryComponent } from './repository/repository.component';

const routes: Routes = [
  { path: 'users', component: GithubComponent },
  { path: 'repositories', component: RepositoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
