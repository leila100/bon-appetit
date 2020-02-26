import React from "react";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import RecipeList from "../components/RecipeList";

const CategoriesRecipes = props => {
  const catId = props.navigation.getParam("categoryId");

  const availableRecipes = useSelector(state => state.recipes.filteredRecipes);

  const recipeList = availableRecipes.filter(recipe => recipe.categoryIds.includes(catId));

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
