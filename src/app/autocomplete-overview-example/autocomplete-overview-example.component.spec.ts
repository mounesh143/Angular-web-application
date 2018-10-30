import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteOverviewExampleComponent } from './autocomplete-overview-example.component';

describe('AutocompleteOverviewExampleComponent', () => {
  let component: AutocompleteOverviewExampleComponent;
  let fixture: ComponentFixture<AutocompleteOverviewExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteOverviewExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
