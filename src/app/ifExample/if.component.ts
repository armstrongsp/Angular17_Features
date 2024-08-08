import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-if-example',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './if.component.html'
})
export class IfExampleComponent {
    someControlValue: string = "A";

    toggleValue() {
      if (this.someControlValue == "A"){
        this.someControlValue = "B";
      }
      else if (this.someControlValue == "B"){
        this.someControlValue = "C";
      }
      else {
        this.someControlValue = "A";
      }
    }
}
