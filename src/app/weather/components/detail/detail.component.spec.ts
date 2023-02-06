import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { DetailComponent } from './detail.component';
import { MapComponent } from '../map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, GoogleMapsModule],
      declarations: [DetailComponent, MapComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the markers property correctly when ngOnInit is called', () => {
    const data = {
      coord: {
        lat: 1,
        lon: 2
      },
      name: 'Test City'
    };

    component.ngOnInit();

    expect(component.markers.position).toEqual({
      lat: data.coord.lat,
      lng: data.coord.lon
    });

    expect(component.markers.label).toEqual({
      color: 'black',
      text: data.name
    });
  });
});
