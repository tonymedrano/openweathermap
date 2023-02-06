import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import { GoogleMapsModule } from '@angular/google-maps';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapComponent],
      imports: [
        GoogleMapsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the default zoom', () => {
    fixture.detectChanges();
    expect(component.zoom).toEqual(-1);
  });

  it('should set the markers', () => {
    component.markers = [{ position: { lat: 40.416775, lng: -3.703790 }, label: { color: 'black', text: 'Madrid' } }];
    fixture.detectChanges();
    expect(component.markers).toEqual([
      {
        position: {
          lat: 40.416775,
          lng: -3.703790
        },
        label: {
          color: 'black',
          text: 'Madrid'
        }
      }
    ]);
  });
});
