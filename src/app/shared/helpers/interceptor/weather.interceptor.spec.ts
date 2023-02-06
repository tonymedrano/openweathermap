import { TestBed } from '@angular/core/testing';

import { WeatherInterceptor } from './weather.interceptor';
import { HttpClientModule } from '@angular/common/http';

describe('WeatherInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      WeatherInterceptor
    ],
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const interceptor: WeatherInterceptor = TestBed.inject(WeatherInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
