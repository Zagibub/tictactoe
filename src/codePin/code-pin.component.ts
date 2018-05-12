import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-pin',
  templateUrl: './code-pin.component.html',
  styleUrls: ['./code-pin.component.scss']
})
export class CodePinComponent implements OnInit {
  constructor(private _cookieService: CookieService, private router: Router) {}

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
        this.valid = true;
      } else {
        this._cookieService.put('pin_accepted', '1505');
        this.router.navigate(['/document']);
      }
    }
  }
}
