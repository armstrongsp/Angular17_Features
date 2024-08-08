import { Component, input, effect } from '@angular/core';

@Component({
  selector: 'app-signal-child-example',
  standalone: true,
  templateUrl: './signal-child.component.html'
})
export class SignalChildExampleComponent {
  exampleValue = input<number>(0);
  computedValue: number = 0;

  constructor() {
    effect(() => {
        this.computedValue = this.exampleValue() * 10;
    });
  }
}
