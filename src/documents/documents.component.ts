import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { BootState } from '../app/state/reducer';
import { AppState } from '../store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  @select(state => state.boot)
  boot: Observable<BootState>;
  bootState = '';
  ziele = ['Paris', 'Prag', 'Amsterdam'];
  constructor(ngRedux: NgRedux<AppState>, private route: Router) {
    this.boot.subscribe(state => (this.bootState = state.state));
  }
  click(dest: string) {
    switch (dest) {
      case 'paris':
        window.location.href = 'http://localhost:4200/main.js';
        break;
      case 'amst':
        window.location.href = 'http://localhost:4200/main.js';
        break;
      case 'prag':
        window.location.href = 'http://localhost:4200/main.js';
        break;
      default:
        break;
    }
  }
  ngOnInit(): void {}
}
