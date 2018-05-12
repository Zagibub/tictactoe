import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile.component';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { bootActions } from '../app/state/actions';
import { BootState } from '../app/state/reducer';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { CodePinComponent } from '../codePin/code-pin.component';

@NgModule({
  declarations: [TileComponent, CodePinComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [TileComponent],
  providers: []
})
export class TileModule {}
