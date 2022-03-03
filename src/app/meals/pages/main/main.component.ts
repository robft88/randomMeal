import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { Category, Meal } from 'src/app/utils/interfaces/category.interface';
import { MealsService } from '../../../utils/services/meals.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  categories!: Category[];
  meals!: Meal[];
  form: FormGroup = this.fb.group({
    category: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private ms: MealsService) { }

  ngOnInit(): void {
    this.ms.getCategories().subscribe(resp => this.categories = resp);

    this.form.get('category')?.valueChanges.pipe(
      switchMap(categ => {
        return this.ms.getMealByCateg(categ)
      })
    ).subscribe(resp => this.meals = resp);

  }

}
