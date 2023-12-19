import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { BaseUrl } from "../enum/endpoints.enum";
import { ApiKey } from "../const_data/api-key";
import { WeatherData } from "../interfaces";

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  public fetchCurrentWeatherByCity(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(`${BaseUrl.weatherEndpoint}q=${city}&appid=${ApiKey}`)
  }
}
