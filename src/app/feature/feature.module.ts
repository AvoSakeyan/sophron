import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { HomeModule } from "./home/home.module";
import { DashboardModule } from "./dashboard/dashboard.module";

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    DashboardModule,
    ReactiveFormsModule
  ]
})
export class FeatureModule { }
