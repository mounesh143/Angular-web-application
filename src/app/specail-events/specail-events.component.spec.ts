import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecailEventsComponent } from './specail-events.component';

describe('SpecailEventsComponent', () => {
  let component: SpecailEventsComponent;
  let fixture: ComponentFixture<SpecailEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecailEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecailEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
