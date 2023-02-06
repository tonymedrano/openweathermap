import { TestBed } from '@angular/core/testing';

import { AuthInterceptor } from '../interceptor/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';

describe('AuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthInterceptor
    ],
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
