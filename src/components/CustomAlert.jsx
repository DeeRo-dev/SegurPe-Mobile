import React from "react";
import { StyleSheet, View } from "react-native";

const CustomAlert = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    width: 420,
    height: 142,
    backgroundColor: "#D8E2FF",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 12,
  },
});

export default CustomAlert;
