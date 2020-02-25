import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  ImageBackground
} from "react-native";

import DefaultText from "../components/DefaultText";

let TouchableComp = TouchableOpacity;
if (Platform.OS === "android" && Platform.Version >= 21) TouchableComp = TouchableNativeFeedback;

const RecipeCard = props => {
  const { title, duration, complexity, cost, imageUrl } = props.recipe;
  return (
    <View style={styles.recipe}>
      <TouchableComp style={{ flex: 1 }} onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.recipeRow, ...styles.header }}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.recipeRow, ...styles.detail }}>
            <DefaultText>{duration}m</DefaultText>
            <DefaultText>{complexity.toUpperCase()}</DefaultText>
            <DefaultText>{cost.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  recipe: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  },
  recipeRow: {
    flexDirection: "row"
  },
  header: {
    height: "85%"
  },
  detail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%"
  },
  bgImage: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center"
  }
});

export default RecipeCard;
