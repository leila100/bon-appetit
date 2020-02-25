import React from "react";

import { CATEGORIES, RECIPES } from "../data/dummy-data";
import RecipeList from "../components/RecipeList";

const CategoriesRecipes = props => {
  const catId = props.navigation.getParam("categoryId");

  const recipeList = RECIPES.filter(recipe => recipe.categoryIds.includes(catId));

  return <RecipeList listData={recipeList} navigation={props.navigation} />;
};

CategoriesRecipes.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCat = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCat.title
  };
};

export default CategoriesRecipes;
