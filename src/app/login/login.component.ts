/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/ANGULAR/openweathermap/src/app/login/login.component.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/ANGULAR/openweathermap
 * Created Date: Thursday, February 2nd 2023, 11:28:35 am
 * Author: Tony Medrano
 * -----
 * Last Modified: Sun Feb 05 2023
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2023 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '../shared/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup | any;
  loading = false;
  submitted = false;
  returnUrl!: string;
  error = '';
  usersSubs!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/weather';
  }


  ngOnDestroy(): void {
    if (this.usersSubs) {
      this.usersSubs.unsubscribe();
    }
  }

  getError(el: any): any {
    switch (el) {
      case 'user':
        if (this.loginForm.get('username').hasError('required')) {
          return 'Username required';
        }
        break;
      case 'pass':
        if (this.loginForm.get('password').hasError('required')) {
          return 'Password required';
        }
        break;
      default:
        return '';
    }
  }

  onSubmit() {
    const user = this.loginForm.value;
    this.submitted = true;
    this.loading = true;
    this.usersSubs = this.authenticationService.login(user.username, user.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/weather']);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}
