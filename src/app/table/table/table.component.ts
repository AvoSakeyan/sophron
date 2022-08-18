import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

import { GreatestPlayers } from '../../shared/interfaces/interfaces';
import { GeneralService } from '../../shared/services/general.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: Observable<GreatestPlayers[]> = this.generalService.dataSource$;

  constructor(
    private generalService: GeneralService,
  ) { }

  ngOnInit(): void {
    this.generalService.getTableData()
  }
}
