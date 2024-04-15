import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  selectedRegister: string = "Sopran";

  constructor(private _router: Router) {}

  getGreeting(): string {
    let username = localStorage.getItem('username');
    if (username) {
      return ', ' + username + '!';
    }
    return '!';
  }

  joinOne() {
    this._router.navigate(['/singing-one']);
  }
  joinTwo() {
    this._router.navigate(['/singing-two']);
  }
  joinThree() {
    this._router.navigate(['/singing-three']);
  }

  doLogout(): void {
    localStorage.removeItem('username');
    this._router.navigate(['/login'])
  }
}
