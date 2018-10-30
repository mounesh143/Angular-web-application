import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceingComponent } from './priceing.component';

describe('PriceingComponent', () => {
  let component: PriceingComponent;
  let fixture: ComponentFixture<PriceingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
