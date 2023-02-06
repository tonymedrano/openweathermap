import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TableComponent } from './components/table/table.component';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { UserService, WeatherService } from '../shared/services';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WeatherComponent,
        TableComponent
      ],
      imports: [
        GoogleMapsModule,
        MatDialogModule,
        HttpClientModule,
        MatIconModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatInputModule,
        MatTableModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
      ],
      providers: [
        UserService,
        WeatherService,
        { provide: MatDialog, useValue: jasmine.createSpyObj('MatDialog', ['open']) }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display city name', () => {
    const city = { name: 'Madrid' };
    expect(component.displayCityName(city)).toEqual('Madrid');
  });

  it('should add a city to favorites', () => {
    const city = { id: 1, name: 'Test City' };
    component.addToFavorites(city);
    expect(component.favorites).toEqual([{ id: 1, name: 'Test City' }]);
  });
});
