import { Coordinates } from "./cordinates";
import { Weather } from "./weather";
import { Main } from "./main";
import { Wind } from "./wind";
import { Sys } from "./sys";

export interface WeatherData {
  id: number,
  name: string,
  cod: number,
  coord: Coordinates,
  weather: Weather[],
  base: string,
  main: Main,
  visibility: number,
  wind: Wind,
  clouds: { all: number },
  dt: number,
  sys: Sys,
}
