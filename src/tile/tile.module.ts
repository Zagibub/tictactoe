import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile.component';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { bootActions } from '../app/state/actions';
import { BootState } from '../app/state/reducer';
import {
  MatCardContent,
  MatCard,
  MatCardTitle,
  MatCardSubtitle,
  MatCardHeader,
  MatCardActions,
  MatButton,
  MatRipple,
  MatCardAvatar,

} from '@angular/material';
import { CodePinComponent } from '../codePin/code-pin.component';

@NgModule({
  declarations: [
    TileComponent,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCardActions,
    MatCardContent,
    MatButton,
    MatRipple,
    MatCardAvatar,
    CodePinComponent
  ],
  imports: [CommonModule],
  exports: [TileComponent],
  providers: []
})
export class TileModule {}
