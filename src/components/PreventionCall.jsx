import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomAlert from "./CustomAlert";

const PreventionCall = ({ onDelegation, onAsistentPreventions, visible }) => {
  console.log(visible);
  return (
    <CustomAlert
      title="Prevención"
      button1Text="Delegar"
      button2Text="Asistir prevención"
      visible={visible}
      onButton1Press={onAsistentPreventions}
    />
  );
};

export default PreventionCall;
