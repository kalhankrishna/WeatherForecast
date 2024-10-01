import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import { WeatherForecast } from '../../models/weather-forecast.model';

@Component({
  selector: 'app-forecast-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast-card.component.html',
  styleUrl: './forecast-card.component.css',
})
export class ForecastCardComponent implements OnInit {
  forecast: WeatherForecast | null = null;
  currentIndex: number = 0;

  constructor(private weatherService: WeatherForecastService) {}

  ngOnInit(): void {
    this.weatherService.forecast$.subscribe((data: WeatherForecast | null) => {
      this.forecast = data;
    });
  }

  get currentDay() {
    return this.forecast?.forecast.forecastday[this.currentIndex];
  }

  nextDay(): void {
    if (
      this.forecast &&
      this.currentIndex < this.forecast.forecast.forecastday.length - 1
    ) {
      this.currentIndex++;
    }
  }

  prevDay(): void {
    if (this.forecast && this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
