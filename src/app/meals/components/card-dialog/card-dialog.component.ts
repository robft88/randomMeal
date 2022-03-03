import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Meal } from '../../../utils/interfaces/category.interface';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html'
})
export class CardDialogComponent implements OnInit {
  meal!: Meal;
  constructor(private dialogRef: MatDialogRef<CardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Meal) {
      this.meal = data;
    }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
