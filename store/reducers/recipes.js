import { RECIPES } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/recipes";

const initialState = {
  recipes: RECIPES,
  filteredRecipes: RECIPES,
  favoriteRecipes: []
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const exist = state.favoriteRecipes.find(recipe => recipe.id === action.recipeId);
      if (!exist) {
        const newFav = state.recipes.find(recipe => recipe.id === action.recipeId);
        return {
          ...state,
          favoriteRecipes: [newFav, ...state.favoriteRecipes]
        };
      } else {
        const newFavRecipes = state.favoriteRecipes.filter(recipe => recipe.id !== action.recipeId);
        return {
          ...state,
          favoriteRecipes: newFavRecipes
        };
      }

    case SET_FILTERS:
      const filters = action.filters;
      const filteredRecipes = state.recipes.filter(recipe => {
        if (filters.glutenFree && !recipe.isGlutenFree) return false;
        if (filters.lactoseFree && !recipe.isLactoseFree) return false;
        if (filters.vegan && !recipe.isVegan) return false;
        if (filters.vegetarian && !recipe.isVegetarian) return false;
        return true;
      });
      return {
        ...state,
        filteredRecipes: filteredRecipes
      };
    default:
      return state;
  }
};

export default recipesReducer;
