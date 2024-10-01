import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { WeatherForecastService } from '../../services/weather-forecast.service';

@Component({
  selector: 'app-forecast-form',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './forecast-form.component.html',
  styleUrl: './forecast-form.component.css',
})
export class ForecastFormComponent {
  days: number[] = Array.from({ length: 14 }, (_, i) => i + 1);
  location = '';
  selectedDay = 1;

  constructor(private weatherForecastService: WeatherForecastService) {}

  onGetForecast(): void {
    this.weatherForecastService
      .getForecast(this.location, this.selectedDay)
      .subscribe();
  }
}
