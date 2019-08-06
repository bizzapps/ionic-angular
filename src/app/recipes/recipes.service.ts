import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'rs1',
      title: 'Kacci Biryani',
      imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg',
      ingredients: ['Beef', 'Potato']
    },
    {
      id: 'rs2',
      title: 'Mutton Biryani',
      // tslint:disable-next-line: max-line-length
      imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/0001/01/Green-Bean-and-Cauliflower-Casserole_EXPS_THCA19_222265_E02_26_1b-696x696.jpg',
      ingredients: ['Beef', 'Potato']
    },
    {
      id: 'rs3',
      title: 'Haydrabadi Biryani',
      imageUrl: 'https://i1.wp.com/swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9526.jpg',
      ingredients: ['Beef', 'Potato', 'Bashmoti Rice', 'Egg']
    }
  ];

  constructor() { }
  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
