/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/ANGULAR/openweathermap/src/app/weather/components/map/map.component.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/ANGULAR/openweathermap
 * Created Date: Sunday, February 5th 2023, 11:46:25 am
 * Author: Tony Medrano
 * -----
 * Last Modified: Sun Feb 05 2023
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2023 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  @Input() zoom!: number;
  @Input() markers!: any;
}
