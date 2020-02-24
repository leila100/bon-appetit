import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Platform, TouchableNativeFeedback } from "react-native";

let TouchableComp = TouchableOpacity;
if (Platform.OS === "android" && Platform.Version >= 21) TouchableComp = TouchableNativeFeedback;

const CategoryCard = props => {
  return (
    <View style={styles.gridItem}>
      <TouchableComp style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={{ ...styles.card, backgroundColor: props.color }}>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 100,
    borderRadius: 10,
    overflow: Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : "visible",
    elevation: 5
  },
  card: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "right"
  }
});

export default CategoryCard;
