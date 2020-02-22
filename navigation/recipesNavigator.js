import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Categories from "../screens/Categories";
import CategoryRecipes from "../screens/CategoryRecipes";
import Recipe from "../screens/Recipe";

const recipesNavigator = createStackNavigator({
  Categories: Categories,
  CategoryRecipes: {
    screen: CategoryRecipes
  },
  Recipe: Recipe
});

export default createAppContainer(recipesNavigator);
