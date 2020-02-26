import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import RecipeCard from "./RecipeCard";

const RecipeList = props => {
  const favRecipes = useSelector(state => state.recipes.favoriteRecipes);

  const renderRecipeItem = itemData => {
    const isFavorite = favRecipes.some(recipe => recipe.id === itemData.item.id);
    return (
      <RecipeCard
        recipe={itemData.item}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "Recipe",
            params: {
              recipeId: itemData.item.id,
              recipeTitle: itemData.item.title,
              isFav: isFavorite
            }
          })
        }
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={props.listData}
        renderItem={renderRecipeItem}
        style={{ width: "95%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default RecipeList;
