import {
  Action,
  combineReducers,
  createStore,
  Store,
  applyMiddleware
} from 'redux';
import { bootReducer, BootState } from './app/state/reducer';
import { BootAppSagas } from './app/state/sagas';

export interface AppState {
  boot: BootState;
}

export const sagas = {
  boot: BootAppSagas
};

export const rootReducer = combineReducers<AppState>({
  boot: bootReducer
});
