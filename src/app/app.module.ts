import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CVComponent } from './pages/cv/cv.component';
import { HeaderComponent } from './others/header/header.component';
import { FooterComponent } from './others/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './pages/page404/page404.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    CVComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    Page404Component,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
