export interface GreatestPlayers {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface UserI {
  name: string;
  surname: string,
  age: number,
  occupation: string,
  salaryType: string,
}

export interface ChartI {
  labels: string[];
  datasets: object[],
}
