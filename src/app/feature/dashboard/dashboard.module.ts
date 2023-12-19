import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CommonModule} from "@angular/common";

const routes: Routes = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  declarations: [
    DashboardComponent,
  ],
    imports: [RouterModule.forChild(routes), CommonModule],
})
export class DashboardModule {}

