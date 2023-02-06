/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/ANGULAR/openweathermap/src/app/weather/weather.component.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/ANGULAR/openweathermap
 * Created Date: Thursday, February 2nd 2023, 11:30:25 am
 * Author: Tony Medrano
 * -----
 * Last Modified: Sun Feb 05 2023
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2023 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, first, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { User } from '../shared/models';

import {
  UserService,
  WeatherService
} from '../shared/services';

import { DetailComponent } from './components/detail/detail.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {
  loading = false;
  users!: User[];
  searchInput = new FormControl();
  cities!: any;
  filteredCities!: Observable<any[]>;
  favorites!: any[];

  removeFavSubs: Subscription;
  selectedFavSubs: Subscription;
  usersSubs!: Subscription;
  citiesSubs!: Subscription;
  loadingModal = false;

  constructor(
    private userService: UserService,
    private weatherService: WeatherService,
    public dialog: MatDialog
  ) {
    this.favorites = JSON.parse(localStorage.getItem('favorites') as any) || [];

    this.removeFavSubs = this.weatherService.getRemoveFavorite().subscribe(index => {
      this.removeFavorite(index);
    });

    this.selectedFavSubs = this.weatherService.getSelectedFavorite().subscribe(favorite => {
      this.loadingModal = true;
      this.weatherService.getCity(favorite.id).subscribe(city => {
        this.openWeatherDetailModal(city);
      });
    });
  }

  ngOnInit() {
    this.loading = true;
    this.usersSubs = this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });

    this.citiesSubs = this.weatherService.getCities().subscribe(data => {
      this.cities = data.cities;
    });

    this.filteredCities = this.searchInput.valueChanges.pipe(
      debounceTime(100),
      map(value => this.filter(value || {})),
    );
  }

  ngOnDestroy(): void {
    this.removeFavSubs.unsubscribe();
    this.selectedFavSubs.unsubscribe();
    this.usersSubs.unsubscribe();
    this.citiesSubs.unsubscribe();
  }

  displayCityName(city: any): string {
    return city && city.name ? city.name : '';
  }

  addToFavorites(city: any) {
    this.favorites.push(city);
    this.updateStorage();
  }

  removeFavorite(index: any) {
    this.favorites.splice(index, 1);
    this.updateStorage();
  }

  updateStorage(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    this.favorites = [...this.favorites];
  }

  openWeatherDetailModal(data: any): void {
    this.loadingModal = false;
    this.dialog.open(DetailComponent, {
      width: '500px',
      data
    });
  }

  private filter(value: any): string[] {
    return this.cities.filter((city: any) => city.name.includes(value));
  }

}
