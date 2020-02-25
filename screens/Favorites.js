import React from "react";

import RecipeList from "../components/RecipeList";
import { RECIPES } from "../data/dummy-data";

const Favorites = props => {
  const favRecipes = RECIPES.filter(recipe => recipe.id === "m1" || recipe.id === "m2");
  return <RecipeList listData={favRecipes} navigation={props.navigation} />;
};

Favorites.navigationOptions = {
  headerTitle: "Your Favorites Recipes"
};

export default Favorites;
