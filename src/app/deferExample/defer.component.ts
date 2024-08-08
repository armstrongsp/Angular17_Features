import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeferBigComponent } from './defer-big/defer-big.component';

@Component({
  selector: 'app-defer-example',
  standalone: true,
  imports: [RouterOutlet, DeferBigComponent],
  templateUrl: './defer.component.html'
})
export class DeferExampleComponent {
  showDeferNow: boolean = false;

  setShowDefer() {
    this.showDeferNow = true;
  }
}
