import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Recipe = props => {
  return (
    <View style={styles.screen}>
      <Text>The Recipe Screen</Text>
      <Button title='Go to start' onPress={() => props.navigation.popToTop()} />
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

export default Recipe;
