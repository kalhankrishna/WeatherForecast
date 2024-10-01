import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForecastFormComponent } from './components/forecast-form/forecast-form.component';
import { ForecastCardComponent } from './components/forecast-card/forecast-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ForecastFormComponent, ForecastCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'weather-forecast-app';
}
