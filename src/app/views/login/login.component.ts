import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMsg : string = '';
  loginForm: FormGroup;
  isLogin: boolean = true;
  unexpectedErrorMsg : string = "An unexpected error occurred."
  statusCodeZero: string = "The server cannot be reached, please try again later."
  constructor(
    private _router: Router,
    private _fb: FormBuilder
    ) {

    this.loginForm = this._fb.group({
      username: ['', [Validators.required, Validators.pattern(/^(\S){1,10}$/), Validators.maxLength(10)]],
      password: ['', [Validators.pattern(/^(\S){1,50}$/)]]
    });

    this.loginForm.valueChanges.subscribe(value => {
      // console.log('Form value changed', value);
    });

    this.loginForm.statusChanges.subscribe(status => {
      if (status == "VALID"){
        this.user.username = this.loginForm.value.username;
        this.user.password = this.loginForm.value.password;
      }
    });
  };

  user = {
    username: "",
    password: ""
  };

  toggleForm() {
    this.isLogin = !this.isLogin;
    this.errorMsg = "";
  }

  doAction() {
    if (this.loginForm.valid) {
      localStorage.setItem('username', this.user.username);
      this._router.navigate(['/welcome']);
    }
  }
}
