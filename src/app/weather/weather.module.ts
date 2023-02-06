/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/ANGULAR/openweathermap/src/app/weather/weather/weather.module.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/ANGULAR/openweathermap
 * Created Date: Thursday, February 2nd 2023, 11:30:56 am
 * Author: Tony Medrano
 * -----
 * Last Modified: Sun Feb 05 2023
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2023 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { DetailComponent } from './components/detail/detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MapComponent } from './components/map/map.component';
import { MatButtonModule } from '@angular/material/button';

import { GoogleMapsModule } from "@angular/google-maps";

const angularMaterial = [
  MatProgressSpinnerModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatIconModule,
  MatDialogModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    WeatherComponent,
    TableComponent,
    DetailComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    ...angularMaterial
  ]
})
export class WeatherModule { }
