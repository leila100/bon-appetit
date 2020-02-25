import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import RecipeList from "../components/RecipeList";
import { RECIPES } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";

const Favorites = props => {
  const favRecipes = RECIPES.filter(recipe => recipe.id === "m1" || recipe.id === "m2");
  return <RecipeList listData={favRecipes} navigation={props.navigation} />;
};

Favorites.navigationOptions = navData => {
  return {
    headerTitle: "Your Favorites Recipes",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default Favorites;
