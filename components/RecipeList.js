import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import RecipeCard from "./RecipeCard";

const RecipeList = props => {
  const renderRecipeItem = itemData => {
    return (
      <RecipeCard
        recipe={itemData.item}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "Recipe",
            params: {
              recipeId: itemData.item.id
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
