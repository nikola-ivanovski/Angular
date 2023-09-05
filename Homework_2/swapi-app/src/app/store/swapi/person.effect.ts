import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SwapiService } from 'src/app/services/swapi.service';
import * as PersonActions from './person.action';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class PersonEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly swapiService: SwapiService
  ) {}

  loadPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonActions.loadPeople),
      mergeMap(() =>
        this.swapiService.fetchPeople().pipe(
          map((people) => PersonActions.loadPeopleSuccess({ people })),
          catchError((error) =>
            of(PersonActions.loadPeopleFail({ error: error.message }))
          )
        )
      )
    )
  );
}
