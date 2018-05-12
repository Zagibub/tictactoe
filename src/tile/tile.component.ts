import { Component, OnInit, Input } from '@angular/core';
import { BootState } from '../app/state/reducer';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../store';

@Component({
  selector: 'app-tictactoe-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @select(state => state.boot)
  boot: Observable<BootState>;
  bootState = '';
  constructor(ngRedux: NgRedux<AppState>) {
    this.boot.subscribe(state => (this.bootState = state.state));
  }

  ngOnInit(): void {}
}
