import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-pin',
  templateUrl: './code-pin.component.html',
  styleUrls: ['./code-pin.component.scss']
})
export class CodePinComponent implements OnInit {
  constructor() {}
  @Input() inputdigits = [];
  valid = false;
  ngOnInit(): void {}

  click(digit: number) {
    if (this.inputdigits.length !== 4) {
      this.inputdigits.push(digit);
    }
    this.valid = false;
  }
  clear() {
    this.inputdigits = [];
    this.valid = false;
  }
  send() {
    if (this.inputdigits.length < 4) {
      this.valid = true;
    } else {
      const value = this.inputdigits.join('');
      if (value !== '1505') {
        alert('Falscher PIN');
      }
    }
  }
}
