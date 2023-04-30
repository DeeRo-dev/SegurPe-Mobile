import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomAlert from "./CustomAlert";

const EmergencyCall = ({ onRefused, onASistentEmergency, visible }) => {
  console.log(visible);
  return (
    <CustomAlert
      title="Emergencia"
      button1Text="Rechazar"
      button2Text="Asistir Emergencia"
      visible={visible}
      onButton1Press={onRefused}
      onButton2Press={onASistentEmergency}
    />
  );
};

export default EmergencyCall;
