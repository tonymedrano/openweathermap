/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/ANGULAR/openweathermap/src/app/weather/weather-routing.module.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/ANGULAR/openweathermap
 * Created Date: Thursday, February 2nd 2023, 11:32:33 am
 * Author: Tony Medrano
 * -----
 * Last Modified: Thu Feb 02 2023
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2023 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from './weather.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
