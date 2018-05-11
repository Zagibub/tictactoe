import { bootActions } from './actions';
import { getType } from 'typesafe-actions';

const INITIAL_STATE = <BootState>{ state: 'BOOTING' };
export interface BootState {
  state: string;
}
export function bootReducer(state: BootState = INITIAL_STATE, action): BootState {
  switch (action.type) {
    case getType(bootActions.boot_complete):
      return { state: 'BOOTED' };
  }
  return state;
}
