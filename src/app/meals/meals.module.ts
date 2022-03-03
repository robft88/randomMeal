import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDialogComponent } from './components/card-dialog/card-dialog.component';
import { CardMealComponent } from './components/card-meal/card-meal.component';
import { MainComponent } from './pages/main/main.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardDialogComponent,
    CardMealComponent,
    MainComponent
  ],
  exports: [
    CardDialogComponent,
    CardMealComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class MealsModule { }
