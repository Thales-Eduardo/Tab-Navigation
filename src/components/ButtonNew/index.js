import React from "react";
import { View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

function ButtonNew({ focused, size, color }) {
  return (
    <View
      style={[styles.container, { borderColor: focused ? "#fff" : "#6fdfff" }]}
    >
      <Entypo name="plus" color={color} size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ButtonNew;
