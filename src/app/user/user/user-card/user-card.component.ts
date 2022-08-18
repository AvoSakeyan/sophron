import {Component, Input, OnInit} from '@angular/core';
import {UserI} from "../../../shared/interfaces/interfaces";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() userData: UserI | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
