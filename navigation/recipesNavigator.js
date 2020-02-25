import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Categories from "../screens/Categories";
import CategoryRecipes from "../screens/CategoryRecipes";
import Recipe from "../screens/Recipe";
import Colors from "../constants/Colors";
import Favorites from "../screens/Favorites";

const defaultStackNavOption = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white"
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
};

const recipesNavigator = createStackNavigator(
  {
    Categories: {
      screen: Categories,
      navigationOptions: {
        headerTitle: "Recipe Categories"
      }
    },
    CategoryRecipes: {
      screen: CategoryRecipes
    },
    Recipe: Recipe
  },
  {
    defaultNavigationOptions: defaultStackNavOption
  }
);

const favoritesNavigator = createStackNavigator(
  {
    Favorites: Favorites,
    Recipe: Recipe
  },
  {
    defaultNavigationOptions: defaultStackNavOption
  }
);

const tabConfig = {
  Recipes: {
    screen: recipesNavigator,
    navigationOptions: {
      tabBarLabel: "Recipes",
      tabBarIcon: tabInfo => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primary
    }
  },
  Favorites: {
    screen: favoritesNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites!!",
      tabBarIcon: tabInfo => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.secondary
    }
  }
};

const recipesFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabConfig, {
        activeColor: "white",
        shifting: true
        // if shifting is false use this to change tab color
        // barStyle: {
        //   backgroundColor: Colors.primary
        // }
      })
    : createBottomTabNavigator(tabConfig, {
        tabBarOptions: {
          activeTintColor: Colors.secondary
        }
      });

export default createAppContainer(recipesFavTabNavigator);
