import React from "react";
import { StyleSheet, View } from "react-native";

import DefaultText from "./DefaultText";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 1,
    marginHorizontal: 20,
    // borderColor: "#ccc",
    // borderWidth: 1,
    padding: 10
  }
});
export default ListItem;
