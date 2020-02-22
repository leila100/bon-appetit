import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CategoriesRecipes = () => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Recipes Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesRecipes;
