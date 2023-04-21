import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapStyle from "../../components/CustomerMaps";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import PreventionCall from "../../components/PreventionCall";
import ButtonUtils from "../../components/ButtonUtils";
import getDirections from "../../helpers/directions";
import playSound from "../../helpers/playSound";

export function Map() {
  // Estado para almacenar la ubicación del usuario
  const [location, setLocation] = useState(null);
  const [locationUser, setLocationUser] = useState({
    latitude: -11.989778,
    longitude: -77.061889,
  });
  const [prevention, setPrevention] = useState(false);
  const [directions, setDirections] = useState(null);
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

  const handleOnPress = () => {
    console.log("handleOnPress called");
    setPrevention(!prevention);
  };
  const handleDirections = async () => {
    if (location && locationUser) {
      const { directions, error } = await getDirections(location, locationUser);

      if (directions) {
        setDirections(directions);
      }

      if (error) {
        console.log(error);
      }
      await playSound();
    } else {
      console.log("Location or locationUser is not available");
    }
  };
  return (
    <View style={styles.container}>
      {location ? ( // Solo muestra el mapa si se ha obtenido la ubicación del usuario
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={MapStyle}
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
          {locationUser && <Marker coordinate={locationUser} />}
          {directions && (
            <Polyline
              coordinates={directions.geometry.coordinates.map(
                (coordinate) => ({
                  latitude: coordinate[1],
                  longitude: coordinate[0],
                })
              )}
              strokeWidth={3}
              strokeColor="blue"
            />
          )}
        </MapView>
      ) : (
        <Text> No tenemos por permisos </Text>
      )}
      <View style={styles.buttonContainer}>
        <ButtonUtils title="prueba" onPress={handleOnPress} />
      </View>
      <PreventionCall
        visible={prevention}
        onAsistentPreventions={handleDirections}
      />
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
  buttonContainer: {
    position: "absolute",
    top: 20, // ajusta este valor para cambiar la posición vertical del botón
    width: "100%",
    alignItems: "center",
  },
});
