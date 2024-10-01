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

  constructor(private weatherService: WeatherForecastService) {}

  ngOnInit(): void {
    this.weatherService.forecast$.subscribe((data: WeatherForecast | null) => {
      this.forecast = data;
    });
  }
}
