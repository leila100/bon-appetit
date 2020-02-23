import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { CATEGORIES, RECIPES } from "../data/dummy-data";

const CategoriesRecipes = props => {
  const catId = props.navigation.getParam("categoryId");

  const recipeList = RECIPES.filter(recipe => recipe.categoryIds.includes(catId));

  const renderRecipeItem = itemData => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList keyExtractor={(item, index) => item.id} data={recipeList} renderItem={renderRecipeItem} />
    </View>
  );
};

CategoriesRecipes.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCat = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCat.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesRecipes;
