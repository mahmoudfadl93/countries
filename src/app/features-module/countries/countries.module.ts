import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { SharedModule } from '@shared/shared.module';
import { PrimengModule } from '@shared/primeng.module';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
    PrimengModule
  ]
})
export class CountriesModule { }
