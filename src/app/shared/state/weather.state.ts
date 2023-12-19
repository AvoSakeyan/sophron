import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {Observable, throwError, timer} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { WeatherService } from "../services/weather.service";
import * as WeatherActions from './weather.actions';
import { WeatherData } from "../interfaces";

export interface WeatherStateModel {
  weatherData: any;
}

@State<WeatherStateModel>({
  name: 'weatherManagement',
  defaults: {
    weatherData: null,
  },
})

@Injectable()
export class WeatherState {
  @Selector()
  public static getWeatherData({ weatherData }: WeatherStateModel): WeatherData {
    return weatherData;
  }

  constructor(public weatherService: WeatherService) {}

  @Action(WeatherActions.FetchCurrentWeatherByCity)
  public fetchCurrentWeatherByCity(
    ctx: StateContext<WeatherStateModel>,
    { cityName }: WeatherActions.FetchCurrentWeatherByCity): Observable<any> {
      return this.weatherService.fetchCurrentWeatherByCity(cityName).pipe(
        map(value => {
          console.log(value);
          ctx.setState({
            weatherData: value
          })
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }
}
