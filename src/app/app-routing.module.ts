import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { CVComponent } from './pages/cv/cv.component';
import { Page404Component } from './pages/page404/page404.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'cv', component:CVComponent},
  {path: '404', component: Page404Component},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
