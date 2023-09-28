import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YourCV';
  constructor(public router: Router){}
}
