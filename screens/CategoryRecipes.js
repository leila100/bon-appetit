import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CategoriesRecipes = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Recipes Screen</Text>
      <Button
        title='Go to detail Recipe'
        onPress={() => {
          props.navigation.navigate("Recipe");
        }}
      />
      <Button
        title='Go Back'
        onPress={() => {
          // props.navigation.goBack();
          props.navigation.pop();
        }}
      />
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
