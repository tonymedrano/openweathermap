/* import { TestBed } from '@angular/core/testing';

import { WeatherService } from '../weather/weather.service';
import { HttpClientModule } from '@angular/common/http';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
 */

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });

    service = TestBed.get(WeatherService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCities', () => {
    it('should return an Observable<any>', () => {
      const mockCities = [{ id: 2643743, name: 'London' }, { id: 2950159, name: 'Berlin' }];

      service.getCities().subscribe(cities => {
        expect(cities).toEqual(mockCities);
      });

      const req = httpMock.expectOne(service.baseLocalCities);
      expect(req.request.method).toBe('GET');
      req.flush(mockCities);
    });
  });

  describe('getCity', () => {
    it('should return an Observable<any>', () => {
      const cityId: any = 2643743;
      const mockCity = { id: 2643743, name: 'London', weather: [{ main: 'Rain', description: 'light rain' }] };

      service.getCity(cityId).subscribe(city => {
        expect(city).toEqual(mockCity);
      });

      const req = httpMock.expectOne(`${service.baseWeatherURL}${cityId}${service.urlSuffix}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockCity);
    });
  });

  describe('selectedFavorite', () => {
    it('should call next on favoriteSelected Subject with given city', () => {
      const spy = spyOn(service.favoriteSelected, 'next');
      const city = { id: 2643743, name: 'London' };

      service.selectedFavorite(city);
      expect(spy).toHaveBeenCalledWith(city);
    });
  });

  describe('removeFavorite', () => {
    it('should call next on favoriteIndex Subject with given index', () => {
      const spy = spyOn(service.favoriteIndex, 'next');
      const index = 0;

      service.removeFavorite(index);
      expect(spy).toHaveBeenCalledWith(index);
    });
  });
});
