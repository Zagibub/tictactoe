import { Component, OnInit, Input } from '@angular/core';
import { BootState } from '../app/state/reducer';

@Component({
  selector: 'app-tictactoe-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() boot: BootState;

  constructor() { }

  ngOnInit(): void {

  }
}
