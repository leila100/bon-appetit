import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Categories = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title='Go to Recipes'
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryRecipes" });
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

export default Categories;
