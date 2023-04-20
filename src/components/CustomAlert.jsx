import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";

const CustomComponent = ({
  title,
  onButton1Press,
  onButton2Press,
  button1Text,
  button2Text,
  singleButtonText,
  visible,
}) => {
  const animationValue = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: visible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  const containerStyle = [
    styles.container,
    {
      opacity: animationValue,
      transform: [
        {
          translateY: animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 0],
          }),
        },
      ],
    },
  ];

  return (
    <Animated.View style={containerStyle}>
      <Text style={styles.title}>{title}</Text>
      {singleButtonText ? (
        <TouchableOpacity
          style={[styles.button, styles.singleButton]}
          onPress={onButton1Press}
        >
          <Text>{singleButtonText}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={onButton1Press}
          >
            <Text style={styles.button1Text}>{button1Text}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSecond}
            onPress={onButton2Press}
          >
            <Text style={styles.button2Text}>{button2Text}</Text>
          </TouchableOpacity>
        </View>
      )}
    </Animated.View>
  );
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
  title: {
    position: "absolute",
    left: "3%",
    top: "11.27%",
    width: "50%",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 32,
    lineHeight: 32,
    textAlign: "center",
    color: "#16253A",
    flexWrap: "wrap",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "10%",
    width: "100%",
  },
  buttonPrimary: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "#D8E2FF",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#004494",
    color: "#004494",
  },
  button1Text: {
    color: "#004494",
  },
  button2Text: {
    color: "#FFFFFF",
  },
  buttonSecond: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "#F57D20",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  singleButton: {
    alignSelf: "center",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomComponent;
