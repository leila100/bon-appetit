import React from "react";
import { Switch, StyleSheet, View, Text } from "react-native";

import Colors from "../constants/Colors";

const BasicSwitch = props => {
  return (
    <View style={styles.switchContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primary }}
        thumbColor={Platform.OS === "android" ? Colors.primary : ""}
        value={props.value}
        onValueChange={newValue => props.setValue(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%"
  }
});

export default BasicSwitch;
