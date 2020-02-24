import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { RECIPES } from "../data/dummy-data";

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
    headerTitle: recipeDetail.title
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
