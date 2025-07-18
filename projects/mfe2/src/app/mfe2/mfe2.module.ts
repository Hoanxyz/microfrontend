import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mfe2RoutingModule } from './mfe2-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    Mfe2RoutingModule
  ]
})
export class Mfe2Module { }
