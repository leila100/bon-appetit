import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import Switch from "../components/BasicSwitch";

const Filters = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegeterian, setIsVegeterian] = useState(false);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <Switch label='Gluten Free' value={isGlutenFree} setValue={setIsGlutenFree} />
      <Switch label='Lactose Free' value={isLactoseFree} setValue={setIsLactoseFree} />
      <Switch label='Vegan' value={isVegan} setValue={setIsVegan} />
      <Switch label='Vegeterian' value={isVegeterian} setValue={setIsVegeterian} />
    </View>
  );
};

Filters.navigationOptions = navData => {
  return {
    headerTitle: "Filter Recipes",
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
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  }
});

export default Filters;
