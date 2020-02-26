import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import Switch from "../components/BasicSwitch";

const Filters = props => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <Switch label='Gluten Free' value={isGlutenFree} setValue={setIsGlutenFree} />
      <Switch label='Lactose Free' value={isLactoseFree} setValue={setIsLactoseFree} />
      <Switch label='Vegan' value={isVegan} setValue={setIsVegan} />
      <Switch label='Vegetarian' value={isVegetarian} setValue={setIsVegetarian} />
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
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Save' iconName='ios-save' onPress={navData.navigation.getParam("save")} />
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
