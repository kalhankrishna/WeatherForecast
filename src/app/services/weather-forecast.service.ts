import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs';
import { WeatherForecast } from '../models/weather-forecast.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {
  private forecastSubject = new BehaviorSubject<WeatherForecast | null>(null);
  forecast$ = this.forecastSubject.asObservable();

  constructor(private http: HttpClient) {}

  getForecast(location: string, days: number): Observable<WeatherForecast> {
    const url = `${environment.apiURL}/forecast.json?key=${environment.weatherAPIKey}&q=${location}&days=${days}`;
    return this.http.get<WeatherForecast>(url).pipe(
      tap((data: WeatherForecast) => {
        this.forecastSubject.next(data);
      })
    );
  }
}
