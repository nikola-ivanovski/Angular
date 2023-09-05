import { createReducer, on } from '@ngrx/store';
import { Person } from 'src/app/interfaces/person.interface';
import * as PersonActions from './person.action';

export interface PersonState {
  people: Person[];
  loading: boolean;
  error: string | null;
}

export const initialState: PersonState = {
  people: [],
  loading: false,
  error: null,
};

export const personReducer = createReducer(
  initialState,
  on(PersonActions.loadPeople, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(PersonActions.loadPeopleSuccess, (state, payload) => ({
    ...state,
    people: payload.people,
    loading: false,
  })),
  on(PersonActions.loadPeopleFail, (state, payload) => ({
    ...state,
    loading: false,
    error: payload.error,
  }))
);
