import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { AppState } from '../store';
import { Observable } from 'rxjs';
import { BootState } from './state/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FalsusReisen';
  @select(state => state.boot)
  boot: Observable<BootState>;
  bootState = '';
  constructor(ngRedux: NgRedux<AppState>) {
    this.boot.subscribe(state => (this.bootState = state.state));
  }
}
