import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meal } from 'src/app/utils/interfaces/category.interface';
import { MealsService } from 'src/app/utils/services/meals.service';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';

@Component({
  selector: 'app-card-meal',
  templateUrl: './card-meal.component.html'
})
export class CardMealComponent implements OnInit {
  @Input() meal!: Meal;
  constructor(private ms: MealsService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDetails(id: string){
    this.ms.getMealById(id).subscribe(resp => {
      this.dialog.open(CardDialogComponent,{
        disableClose: true,
        data: resp
    })
  })
  }

}
