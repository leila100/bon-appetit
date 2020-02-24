import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { RECIPES } from "../data/dummy-data";
import CustomHeaderButton from "../components/HeaderButton";

const Recipe = props => {
  const recipeId = props.navigation.getParam("recipeId");
  const recipeDetail = RECIPES.find(rcp => rcp.id === recipeId);

  return (
    <View style={styles.screen}>
      <Text>{recipeDetail.title}</Text>
      <Text>{recipeDetail.cost}</Text>
    </View>
  );
};

Recipe.navigationOptions = navigationData => {
  const recipeId = navigationData.navigation.getParam("recipeId");
  const recipeDetail = RECIPES.find(rcp => rcp.id === recipeId);

  return {
    headerTitle: recipeDetail.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-star'
          onPress={() => {
            console.log("Mark as favorite!!!");
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Recipe;
