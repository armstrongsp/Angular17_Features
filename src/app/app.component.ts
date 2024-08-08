import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DeferExampleComponent } from '../app/deferExample/defer.component';
import { ForExampleComponent } from '../app/forExample/for.component';
import { IfExampleComponent } from '../app/ifExample/if.component';
import { SwitchExampleComponent } from '../app/switchExample/switch.component';
import { SignalExampleComponent } from '../app/signalExample/signal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DeferExampleComponent, ForExampleComponent, IfExampleComponent, SwitchExampleComponent, SignalExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  exampleName: string = 'welcome';

  setExample(name: string) {
    this.exampleName = name;
  }
}
