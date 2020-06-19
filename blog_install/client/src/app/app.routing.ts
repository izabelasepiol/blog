import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostDetailsComponent } from './post-details/post-details.component';

export const AppRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
    { path: 'add', component: AddPostComponent },
    { path: '404', component: NotFoundComponent },
    { path: 'post/:id', component: PostDetailsComponent },
    { path: '**', redirectTo: '/404' }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);