import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile.component';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { bootActions } from '../app/state/actions';
import { BootState } from '../app/state/reducer';

@NgModule({
  declarations: [TileComponent],
  imports: [CommonModule],
  exports: [TileComponent],
  providers: []
})
export class TileModule {
}
