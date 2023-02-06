import { TestBed } from '@angular/core/testing';

import { FakeLoginInterceptor } from './login-backend.interceptor';
import { HttpClientModule } from '@angular/common/http';

describe('LoginBackendInterceptor', () => {
  let service: FakeLoginInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FakeLoginInterceptor
      ],
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(FakeLoginInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
