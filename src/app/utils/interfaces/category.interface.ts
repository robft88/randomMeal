export interface Main {
    meals: Category[] | Meal[];
}

export interface Category {
    strCategory: string;
}

export interface Meal {
    idMeal: string;
    strMeal: string;
    strDrinkAlternate?: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube?: string;
    strIngredients?: string[];
    strSource?: string,
    strImageSource?: string,
    strCreativeCommonsConfirmed?: string,
    dateModified?: string
}