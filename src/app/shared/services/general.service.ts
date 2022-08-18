import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { ChartI, GreatestPlayers, UserI} from '../interfaces/interfaces';
import { ELEMENT_DATA } from '../main-data/table';
import { USER_DATA} from "../main-data/user";
import { BAR_DATA_SET, LINE_DATA_SET} from "../main-data/charts";

@Injectable({
  providedIn: 'root'
})

export class GeneralService {

  private _tableData: Subject<GreatestPlayers[]> = new BehaviorSubject<GreatestPlayers[]>([]);
  public readonly dataSource$: Observable<GreatestPlayers[]> = this._tableData.asObservable();

  private _userData: Subject<UserI[]> = new BehaviorSubject<UserI[]>([]);
  public readonly userData$: Observable<UserI[]> = this._userData.asObservable();

  private _barChartData: Subject<ChartI> = new BehaviorSubject<ChartI>({datasets: [], labels: []});
  public readonly barChartData$: Observable<ChartI> = this._barChartData.asObservable();

  private _lineChartData: Subject<ChartI> = new BehaviorSubject<ChartI>({datasets: [], labels: []});
  public readonly lineChartData$: Observable<ChartI> = this._lineChartData.asObservable();

  constructor() {
  }

  getTableData() {
    return this._tableData.next(ELEMENT_DATA)
  }

  getUserData() {
    return this._userData.next(USER_DATA)
  }

  getBarChartData() {
    return this._barChartData.next(BAR_DATA_SET)
  }

  getLineChartData() {
    return this._lineChartData.next(LINE_DATA_SET)
  }

}
