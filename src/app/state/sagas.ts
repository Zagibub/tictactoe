import { SagaIterator, takeEvery } from 'redux-saga';
import { getType } from 'typesafe-actions';
import { call, put } from 'redux-saga/effects';
import { Injector, Inject } from '@angular/core';
import { bootActions } from './actions';

export class BootAppSagas {
  constructor() {
    this.main.bind(this);
  }

  public *bootSaga() {
   yield put(bootActions.boot_complete());
  }

  *main() {
    yield takeEvery(getType(bootActions.boot_init), this.bootSaga.bind(this));
  }
}
