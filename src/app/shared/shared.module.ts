import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SpinnerLoaderComponent } from './component/spinner-loader/spinner-loader.component';
import { NoResultComponent } from './component/no-result/no-result.component';
import { CardWarpperComponent } from './component/card-warpper/card-warpper.component';



@NgModule({
  declarations: [
    AppLayoutComponent,
    SpinnerLoaderComponent,
    NoResultComponent,
    CardWarpperComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CardWarpperComponent,
    FormsModule,
    AppLayoutComponent,
    SpinnerLoaderComponent,
    NoResultComponent
  ]
})
export class SharedModule { }
