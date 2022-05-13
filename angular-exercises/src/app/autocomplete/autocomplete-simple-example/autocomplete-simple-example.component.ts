import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

export interface User {
  name: string;
}

@Component({
  selector: 'app-autocomplete-simple-example',
  templateUrl: './autocomplete-simple-example.component.html',
  styleUrls: ['./autocomplete-simple-example.component.scss']
})
export class AutocompleteSimpleExampleComponent implements OnInit {

  myControlNumbers = new FormControl();
  myControlUsers = new FormControl();
  optionsNumbers: string[] = ['One', 'Two', 'Three', 'Four'];
  optionsUsers: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptionsNumbers: Observable<string[]> | undefined;
  filteredOptionsUsers: Observable<User[]> | undefined;

  constructor() { }

  ngOnInit(): void {
    // this.myControlNumbers.patchValue(this.options[2]);
    // this.myControlNumbers.valueChanges.subscribe(value => console.log(value));

    this.filteredOptionsNumbers = this.myControlNumbers.valueChanges.pipe(
      startWith(''),
      map(value => this._filterNumbers(value)),
    );

    this.filteredOptionsUsers = this.myControlUsers.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filterUser(name) : this.optionsUsers.slice())),
    );
  }

  private _filterNumbers(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsNumbers.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterUser(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.optionsUsers.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

}
