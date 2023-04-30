import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";

const GrowCircle = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const animationRef = useRef(animation).current;

  const startAnimation = () => {
    Animated.timing(animationRef, {
      toValue: 300,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      animationRef.setValue(0);
      startAnimation();
    });
  };

  const backgroundColorInterpolate = animationRef.interpolate({
    inputRange: [0, 300],
    outputRange: ["blue", "red"],
  });

  const circleScale = animationRef.interpolate({
    inputRange: [0, 300],
    outputRange: [0.5, 1.5],
  });

  const circleStyle = {
    backgroundColor: backgroundColorInterpolate,
    transform: [
      { scaleX: circleScale },
      { scaleY: circleScale },
      {
        translateX: animationRef.interpolate({
          inputRange: [0, 300],
          outputRange: [0, 150],
        }),
      },
      {
        translateY: animationRef.interpolate({
          inputRange: [0, 150, 300],
          outputRange: [0, -75, 0],
        }),
      },
    ],
  };

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={[styles.circle, circleStyle]} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 150 / 2,
    alignSelf: "center",
    width: 150,
    height: 150,
  },
});

export default GrowCircle;
