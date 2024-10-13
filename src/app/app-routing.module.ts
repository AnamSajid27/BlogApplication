import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './Pages/create-post/create-post.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ViewAllComponent } from './Pages/view-all/view-all.component';
import { ViewPostComponent } from './Pages/view-post/view-post.component';

const routes: Routes = [
  { path:'create-post', component: CreatePostComponent},
  { path:'landing-page', component: LandingPageComponent},
  { path:'view-all', component: ViewAllComponent},
  { path:'view-post/:id', component: ViewPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
