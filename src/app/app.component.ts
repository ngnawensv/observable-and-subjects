import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/', 'home']);
  }
  goToObservable() {
    this.router.navigate(['/', 'observable']);
  }
  goToSubject() {
    this.router.navigate(['/', 'subject']);
  }
  goToPromise() {
    this.router.navigate(['/', 'promise']);
  }
}
