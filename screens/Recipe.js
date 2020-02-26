import React, { useEffect, useCallback } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import ListItem from "../components/ListItem";
import { toggleFavorite } from "../store/actions/recipes";

const Recipe = props => {
  const availableRecipes = useSelector(state => state.recipes.recipes);

  const recipeId = props.navigation.getParam("recipeId");
  const recipeDetail = availableRecipes.find(rcp => rcp.id === recipeId);

  const dispatch = useDispatch();

  const toggleFavHandler = useCallback(() => {
    dispatch(toggleFavorite(recipeId));
  }, [dispatch, recipeId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavHandler });
  }, [toggleFavHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: recipeDetail.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{recipeDetail.duration}m</DefaultText>
        <DefaultText>{recipeDetail.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{recipeDetail.cost.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {recipeDetail.ingredients.map(ingredient => (
        <ListItem key={ingredient}>.. {ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {recipeDetail.steps.map(step => (
        <ListItem key={step}>.. {step}</ListItem>
      ))}
    </ScrollView>
  );
};

Recipe.navigationOptions = navigationData => {
  const title = navigationData.navigation.getParam("recipeTitle");
  const toggleFav = navigationData.navigation.getParam("toggleFav");
  return {
    headerTitle: title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Favorite' iconName='ios-star' onPress={toggleFav} />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%"
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
    alignItems: "center"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center"
  }
});

export default Recipe;
