import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { UserCardComponent } from './user/user-card/user-card.component';
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    UserComponent,
    UserCardComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule
  ]
})
export class UserModule { }
