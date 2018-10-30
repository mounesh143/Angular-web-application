import {Component,OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable,Observer} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface State {
  flag: string;
  name: string;
  population: string;
}
export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-autocomplete-overview-example',
  templateUrl: './autocomplete-overview-example.component.html',
  styleUrls: ['./autocomplete-overview-example.component.css']
})
export class AutocompleteOverviewExampleComponent implements OnInit {

  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg,
      flag: '/assets/images/poster1.jpg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];
  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );

      this.asyncTabs = Observable.create((observer: Observer<ExampleTab[]>) => {
        setTimeout(() => {
          observer.next([
            {label: 'Daily', content: 'Content 1'},
            {label: 'Weekly', content: 'Content 2'},
            {label: 'Monthly', content: 'Content 3'},
          ]);
        }, 1000);
      });
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
  }

}
