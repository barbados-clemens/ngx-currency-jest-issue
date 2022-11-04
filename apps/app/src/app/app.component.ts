import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'currency-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';
  f: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.f = this.fb.group({ money: ['', Validators.required] });
  }
}
