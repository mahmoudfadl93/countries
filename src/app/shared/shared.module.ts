import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './component/card/card.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SpinnerLoaderComponent } from './component/spinner-loader/spinner-loader.component';
import { NoResultComponent } from './component/no-result/no-result.component';



@NgModule({
  declarations: [
    CardComponent,
    AppLayoutComponent,
    SpinnerLoaderComponent,
    NoResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    FormsModule,
    AppLayoutComponent,
    SpinnerLoaderComponent,
    NoResultComponent
  ]
})
export class SharedModule { }
