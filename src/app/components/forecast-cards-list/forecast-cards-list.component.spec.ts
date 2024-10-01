import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastCardsListComponent } from './forecast-cards-list.component';

describe('ForecastCardsListComponent', () => {
  let component: ForecastCardsListComponent;
  let fixture: ComponentFixture<ForecastCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastCardsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
