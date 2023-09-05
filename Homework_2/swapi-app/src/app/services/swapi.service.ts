import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person, Persons } from '../interfaces/person.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private URL = 'https://swapi.dev/api/people/';

  constructor(private readonly http: HttpClient) {}

  fetchPeople(): Observable<Person[]> {
    return this.http.get<Persons>(this.URL).pipe(
      map((data) =>
        data.results.map((personData: Person) => ({
          fullName: personData.fullName,
          gender: personData.gender,
          birthYear: personData.birthYear,
          height: personData.height,
          mass: personData.mass,
        }))
      )
    );
  }
}
