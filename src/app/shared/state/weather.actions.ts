export class FetchCurrentWeatherByCity {
  public static readonly type = '[WeatherData] fetch current weather';
  constructor(public cityName: string) {}
}
