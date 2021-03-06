import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Platform, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import Categories from "../screens/Categories";
import CategoryRecipes from "../screens/CategoryRecipes";
import Recipe from "../screens/Recipe";
import Colors from "../constants/Colors";
import Favorites from "../screens/Favorites";
import Filters from "../screens/Filters";

const defaultStackNavOption = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white"
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold"
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans"
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
      tabBarIcon: tabInfo => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primary,
      tabBarLabel: Platform.OS === "android" ? <Text style={{ fontFamily: "open-sans-bold" }}>Recipes</Text> : "Recipes"
    }
  },
  Favorites: {
    screen: favoritesNavigator,
    navigationOptions: {
      tabBarLabel:
        Platform.OS === "android" ? <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text> : "Favorites",
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
          labelStyle: {
            fontFamily: "open-sans-bold"
          },
          activeTintColor: Colors.secondary
        }
      });

const filterNavigator = createStackNavigator(
  {
    Filters: Filters
  },
  {
    // navigationOptions: {
    //   drawerLabel: "Filters!!!"
    // },
    defaultNavigationOptions: defaultStackNavOption
  }
);

const mainNavigator = createDrawerNavigator(
  {
    RecipesFav: {
      screen: recipesFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Recipes"
      }
    },
    Filters: {
      screen: filterNavigator,
      navigationOptions: {
        drawerLabel: "Filters"
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: Colors.secondary,
      labelStyle: {
        fontFamily: "open-sans-bold",
        fontSize: 16
      }
    }
  }
);

export default createAppContainer(mainNavigator);
