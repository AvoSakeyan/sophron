import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GeneralService } from '../../shared/services/general.service';
import { UserI} from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public userData$: Observable<UserI[]> | undefined;

  constructor(
    private generalService: GeneralService,
  ) {
  }

  ngOnInit(): void {
    this.generalService.getUserData()
    this.userData$ = this.generalService.userData$;
  }

}
