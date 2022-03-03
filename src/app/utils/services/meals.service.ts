import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Meal } from '../interfaces/category.interface';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  private _baseUrl: string = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category>(`${this._baseUrl}/list.php?c=list`).pipe(
      map(list => Object.values(list).reduce((p, c) => p.concat(c)))
    );
  }
  getMealByCateg(categ: Category): Observable<Meal[]> {
    return this.http.get<Meal>(`${this._baseUrl}/filter.php?c=${categ}`).pipe(
      map(list => Object.values(list).reduce((p, c) => p.concat(c))),
      map(list => {
        if (list.length <= 3) {
          return list;
        }
        const arr = [];
        for (let i = 0; i < 3; i++) {
          const el = list[Math.floor(Math.random() * list.length)];
          const index = list.indexOf(el);
          arr.push(el);
          list.splice(index, 1)
        }
        return arr;
      })
    )
  }

  getMealById(id: string) {
    return this.http.get(`${this._baseUrl}/lookup.php?i=${id}`).pipe(
      map(list => Object.values(list).reduce((p, c) => p.concat(c))[0]),
      map(list => {
        let meal: Meal = {
          idMeal: list.idMeal,
          strMeal: list.strMeal,
          strCategory: list.strCategory,
          strArea: list.strArea,
          strInstructions: list.strInstructions,
          strMealThumb: list.strMealThumb,
          strTags: list.strTags
        };
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          if(list[`strIngredient${i}`]){
            ingredients.push(`${list[`strIngredient${i}`]} - ${list[`strMeasure${i}`]}`)
          } else {
            break;
          }
        }
        meal['strIngredients'] = ingredients;
        return meal;
      })
    )
  }
}
