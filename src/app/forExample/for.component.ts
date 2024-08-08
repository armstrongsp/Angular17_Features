import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { chicken } from '../../app/models/chicken';
import { mockChickens } from '../../app/mock-data/chickens';

@Component({
  selector: 'app-for-example',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './for.component.html'
})
export class ForExampleComponent {
  chickens: chicken[] = mockChickens;
  coonsInYard?: chicken[] = undefined;
}
