import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Platform } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryCard from "../components/CategoryCard";

const Categories = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryCard
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "CategoryRecipes",
            params: {
              categoryId: itemData.item.id
            }
          })
        }
      />
    );
  };

  return (
    <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 100
  }
});

export default Categories;
