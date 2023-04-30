import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";

const Historial = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const animationRef = useRef(animation).current;

  const startAnimation = () => {
    Animated.timing(animationRef, {
      toValue: 300,
      duration: 1500,
    }).start();
  };

  const backgroundColorInterpolate = animationRef.interpolate({
    inputRange: [0, 300],
    outputRange: ["blue", "red"],
  });

  const circleSize = animationRef.interpolate({
    inputRange: [0, 300],
    outputRange: [50, 150],
  });

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View
        style={[
          styles.circle,
          {
            width: circleSize,
            height: circleSize,
            backgroundColor: backgroundColorInterpolate,
          },
        ]}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 150 / 2,
    alignSelf: "center",
  },
});

export default Historial;
