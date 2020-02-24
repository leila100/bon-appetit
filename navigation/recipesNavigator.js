import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Categories from "../screens/Categories";
import CategoryRecipes from "../screens/CategoryRecipes";
import Recipe from "../screens/Recipe";
import Colors from "../constants/Colors";
import Favorites from "../screens/Favorites";

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
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "white"
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
    }
  }
);

const recipesFavTabNavigator = createBottomTabNavigator(
  {
    Recipes: {
      screen: recipesNavigator,
      navigationOptions: {
        tabBarLabel: "Recipes",
        tabBarIcon: tabInfo => {
          return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
        }
      }
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarLabel: "Favorites!!",
        tabBarIcon: tabInfo => {
          return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.secondary
    }
  }
);

export default createAppContainer(recipesFavTabNavigator);
