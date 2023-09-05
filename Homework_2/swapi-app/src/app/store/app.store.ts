import { ActionReducerMap } from '@ngrx/store';
import { PersonState, personReducer } from './swapi/person.reducer';

export interface AppState {
  persons: PersonState;
}

export const reducers: ActionReducerMap<AppState> = {
  persons: personReducer,
};
