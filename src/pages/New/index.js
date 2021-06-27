import React from "react";
import { View, Text, StyleSheet } from "react-native";

function New() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página new</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#312e28",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default New;
