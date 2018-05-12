import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import createSagaMiddleware from 'redux-saga';
import { SagaIterator } from 'redux-saga';
import { createLogger } from 'redux-logger';
import { Reducer, applyMiddleware, createStore } from 'redux';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { AppComponent } from './app.component';
import { rootReducer, AppState } from '../store';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BootAppSagas } from './state/sagas';
import { bootActions } from './state/actions';
import { TileModule } from '../tile/tile.module';
import { MatSpinner  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, MatSpinner],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    NgReduxModule,
    NgReduxRouterModule,
    HttpClientModule,
    TileModule,
    BrowserAnimationsModule
  ],

  providers: [NgReduxRouter, TileModule, BootAppSagas],
  bootstrap: [AppComponent]
})
export class AppModule {
  private rootReducer: Reducer<AppState>;
  private sagas: (() => Iterator<any>)[] = [];

  constructor(
    ngRedux: NgRedux<AppState>,
    injector: Injector,
    bootAppSagas: BootAppSagas
  ) {
    this.sagas.push(bootAppSagas.main.bind(bootAppSagas));
    this.rootReducer = rootReducer;
    const sagaMiddleware = createSagaMiddleware();
    const enhancer = applyMiddleware(createLogger(), sagaMiddleware);
    const store = createStore(this.rootReducer, enhancer);
    this.sagas.forEach(saga =>
      sagaMiddleware.run(saga).done.catch(err => {
        console.log(saga, err);
      })
    );
    ngRedux.provideStore(store);
    injector.get(NgReduxRouter).initialize();
    ngRedux.dispatch(bootActions.boot_init());
  }
}
