import React from "react";
import { StyleSheet, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import RecipeList from "../components/RecipeList";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const Favorites = props => {
  const favRecipes = useSelector(state => state.recipes.favoriteRecipes);

  if (!favRecipes || favRecipes.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite recipes found. Start adding some.</DefaultText>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Favorites;
