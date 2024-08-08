import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalChildExampleComponent } from './signalChild/signal-child.component';

@Component({
  selector: 'app-signal-example',
  standalone: true,
  imports: [RouterOutlet, SignalChildExampleComponent],
  templateUrl: './signal.component.html'
})
export class SignalExampleComponent {
  numberToShow: number = 10;

  increment() {
    this.numberToShow++;
  }
}
