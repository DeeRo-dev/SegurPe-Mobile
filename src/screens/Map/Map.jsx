import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

export function Map() {
  // Estado para almacenar la ubicación del usuario
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Función asíncrona para solicitar permisos de ubicación
    const requestLocationPermission = async () => {
      const { granted } = await requestForegroundPermissionsAsync();
      if (granted) {
        // Obtener la posición actual del usuario
        const { coords } = await getCurrentPositionAsync({});
        setLocation(coords);
      }
    };
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      {location && ( // Solo muestra el mapa si se ha obtenido la ubicación del usuario
        <MapView
          style={styles.map}
          initialRegion={{
            // Establecer la ubicación inicial del mapa en la posición del usuario
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922, // Establecer el zoom del mapa en la latitud
            longitudeDelta: 0.0421, // Establecer el zoom del mapa en la longitud
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
          // Agregar un marcador en la ubicación del usuario
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
