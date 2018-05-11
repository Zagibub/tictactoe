import { createAction } from 'typesafe-actions';
import { AppState } from '../../store';

export const bootActions = {
  boot_init: createAction('BOOT_INIT'),
  boot_complete: createAction('BOOT_COMPLETED')
};
