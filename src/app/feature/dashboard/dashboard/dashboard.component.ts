import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {WeatherAction, WeatherState} from "../../../shared/state";
import {Observable} from "rxjs";
import {WeatherData} from "../../../shared/interfaces";
import {WeatherService} from "../../../shared/services/weather.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public weatherData$: Observable<WeatherData>;

  constructor(private store: Store) {
    this.weatherData$ = this.store.select(WeatherState.getWeatherData)
  }

  ngOnInit(): void {
    this.fetchCurrentWeather()
  }

  fetchCurrentWeather () {
    const city = localStorage.getItem('city')
    if(city) {
      this.store.dispatch(new WeatherAction.FetchCurrentWeatherByCity(city))
    }
  }

}
