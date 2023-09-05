import { createAction, props } from '@ngrx/store';
import { Person } from 'src/app/interfaces/person.interface';

export const loadPeople = createAction('LOAD_PEOPLE');
export const loadPeopleSuccess = createAction(
  'LOAD_PEOPLE_SUCCESS',
  props<{ people: Person[] }>()
);

export const loadPeopleFail = createAction(
  'LOAD_PEOPLE_FAIL',
  props<{ error: string }>()
);
