import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepositoryComponent } from './repository/repository.component';
import { AppColorDirective } from './app-color.directive';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubFormComponent,
    NavbarComponent,
    RepositoryComponent,
    AppColorDirective,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
