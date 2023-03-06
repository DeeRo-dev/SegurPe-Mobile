import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { requestForegroundPermissionsAsync } from "expo-permissions";

export default function ButtonCall() {
  const [permissionsGranted, setPermissionsGranted] = useState(false);

  const requestPermissions = async () => {
    const { status } = await requestForegroundPermissionsAsync(
      "android.permission.CALL_PHONE"
    );
    if (status === "granted") {
      setPermissionsGranted(true);
    } else {
      console.log("Permiso de llamada denegado");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={requestPermissions} style={styles.button}>
        <Text style={styles.buttonText}>Solicitar permiso de llamada</Text>
      </TouchableOpacity>
      {permissionsGranted && (
        <Text style={styles.text}>Permisos de llamada concedidos</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
