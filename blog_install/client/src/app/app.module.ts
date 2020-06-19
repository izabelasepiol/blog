import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTING } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalDataService } from './service/globaldata.service';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LoginService } from './service/login.service';
import { ShowPostService } from './service/show-post.service';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  declarations: [
  	RootComponent,
    LoginComponent,
    HomeComponent,
    ShowPostComponent,
    AddPostComponent,
    NotFoundComponent,
    TopMenuComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [GlobalDataService, LoginService, ShowPostService],
  bootstrap: [RootComponent]
})
export class AppModule { }