/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/ANGULAR/openweathermap/src/app/weather/components/table/table.component.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/ANGULAR/openweathermap
 * Created Date: Saturday, February 4th 2023, 4:36:56 pm
 * Author: Tony Medrano
 * -----
 * Last Modified: Mon Feb 06 2023
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2023 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService } from 'src/app/shared/services';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
  @Input() data: any;
  displayedColumns: string[] = ['name', 'remove'];

  dataSource: any;

  constructor(private weatherService: WeatherService) {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = changes['data'].currentValue;
  }

  removeAt(index: any): void {
    this.weatherService.removeFavorite(index);
  }

  selectedRow(row: any): void {
    this.weatherService.selectedFavorite(row);
  }
}
