import { RECIPES } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/recipes";

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
    default:
      return state;
  }
};

export default recipesReducer;
