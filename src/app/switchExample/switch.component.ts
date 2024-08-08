import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { mockChickens } from '../mock-data/chickens';
import { chicken } from '../models/chicken';

@Component({
  selector: 'app-switch-example',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './switch.component.html'
})
export class SwitchExampleComponent {
  chickens: chicken[] = mockChickens;
}
