import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mfe1RoutingModule } from './mfe1-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    Mfe1RoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class Mfe1Module { }
