import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import RecipesNavigator from "./navigation/recipesNavigator";
import recipeReducer from "./store/reducers/recipes";

// uses native screens
enableScreens();

const rootReducer = combineReducers({
  recipes: recipeReducer
});
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) return <AppLoading startAsync={fetchFonts} onFinish={() => setFontsLoaded(true)} />;

  return (
    <Provider store={store}>
      <RecipesNavigator />
    </Provider>
  );
}
