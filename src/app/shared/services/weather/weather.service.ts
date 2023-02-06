/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/ANGULAR/openweathermap/src/app/shared/services/weather.service.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/ANGULAR/openweathermap
 * Created Date: Thursday, February 2nd 2023, 1:44:26 pm
 * Author: Tony Medrano
 * -----
 * Last Modified: Sun Feb 05 2023
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2023 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, EMPTY, Subject, map, of, BehaviorSubject } from 'rxjs';

const headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  /** openweathermap api */
  public baseLocalCities = './assets/data/openweathermap-spain.json';
  public baseWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=';
  public appKey = "5b4a5fb7fff1a8f5a3c0cd68dc4e9a5b";
  public urlSuffix = `&units=metric&appid=${this.appKey}`;

  /** Favorites */
  public favoriteIndex: Subject<any> = new Subject<any>();
  public favoriteSelected: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) { }

  getCities(): Observable<any> {
    return this.http.get(this.baseLocalCities, {
      headers: headers,
    })
      .pipe(catchError((err): any => {
        if (err.status === 404) {
          return EMPTY
        }
      })
      );
  }

  getCity(city: string): Observable<any> {
    return this.http.get(this.baseWeatherURL + city + this.urlSuffix, {
      headers: headers,
    })
      .pipe(catchError((err): any => {
        if (err.status === 404) {
          console.log(`City ${city} not found`);
          return EMPTY
        }
      })
      );
  }

  getSelectedFavorite(): Observable<any> {
    return this.favoriteSelected.asObservable();
  }

  selectedFavorite(city: any) {
    this.favoriteSelected.next(city);
  }

  getRemoveFavorite(): Observable<any> {
    return this.favoriteIndex.asObservable();
  }

  removeFavorite(index: number) {
    this.favoriteIndex.next(index);
  }

}
