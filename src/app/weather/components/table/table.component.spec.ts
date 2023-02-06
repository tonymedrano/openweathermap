import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { WeatherService } from 'src/app/shared/services';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let weatherService: WeatherService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      providers: [WeatherService],
      imports: [
        HttpClientModule,
        MatTableModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    weatherService = TestBed.inject(WeatherService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call removeFavorite method of weatherService when removeAt method is called', () => {
    spyOn(weatherService, 'removeFavorite');
    component.removeAt(1);
    expect(weatherService.removeFavorite).toHaveBeenCalledWith(1);
  });

  it('should call selectedFavorite method of weatherService when selectedRow method is called', () => {
    spyOn(weatherService, 'selectedFavorite');
    component.selectedRow({ name: 'city1' });
    expect(weatherService.selectedFavorite).toHaveBeenCalledWith({ name: 'city1' });
  });

  it('should update dataSource when ngOnChanges method is called', () => {
    const changes: any = {
      data: {
        currentValue: [{ name: 'city1' }, { name: 'city2' }]
      }
    };
    component.ngOnChanges(changes);
    expect(component.dataSource).toEqual([{ name: 'city1' }, { name: 'city2' }]);
  });
});
