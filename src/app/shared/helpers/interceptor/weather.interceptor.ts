/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/ANGULAR/openweathermap/src/app/shared/helpers/interceptor/weather.interceptor.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/ANGULAR/openweathermap
 * Created Date: Thursday, February 2nd 2023, 3:19:24 pm
 * Author: Tony Medrano
 * -----
 * Last Modified: Thu Feb 02 2023
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2023 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */


import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


import { AuthService } from '../../services';

@Injectable()
export class WeatherInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.authdata) {
      request = request.clone({
        headers: request.headers.delete('Authorization')
      });
    }

    return next.handle(request);
  }
}
