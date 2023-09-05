import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Person } from 'src/app/interfaces/person.interface';
import { loadPeople } from 'src/app/store/swapi/person.action';
import { PersonState } from 'src/app/store/swapi/person.reducer';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit {
  people$: Observable<Person[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private readonly store: Store<{ person: PersonState }>) {
    this.people$ = this.store.select((state) => state.person.people);
    this.loading$ = this.store.select((state) => state.person.loading);
    this.error$ = this.store.select((state) => state.person.error);
  }

  ngOnInit(): void {
    this.store.dispatch(loadPeople());
    this.people$.subscribe((data) => {
      console.log(data);
    });
  }
}
