import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';
import { BlogComponent } from './components/blog/blog.component';

const appRoutes: Routes =[
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'edit-blog/:id',
    component:EditBlogComponent
  },
  {
    path:'delete-blog/:id',
    component:DeleteBlogComponent
  },
  {
    path:'**',
    component:HomeComponent}
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
