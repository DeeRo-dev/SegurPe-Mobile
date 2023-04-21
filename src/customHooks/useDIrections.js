import { useState, useEffect } from "react";

const API_KEY = "AIzaSyCKlwQXV2oYVomZyRtPEi-2YWhVeR6q1eI"; // Reemplaza "TU_API_KEY_AQUI" con tu clave de API de Google Maps.

/**
 * useDirections es un hook personalizado para obtener la ruta entre dos puntos
 * utilizando la API de Google Maps.
 * @param {Object} origin - objeto con la latitud y longitud del punto de origen.
 * @param {Object} destination - objeto con la latitud y longitud del punto de destino.
 * @returns {Object} - objeto con la ruta y un posible error.
 */
const useDirections = (origin, destination) => {
  const [directions, setDirections] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función asíncrona para obtener las direcciones desde la API de Google Maps.
    const fetchDirections = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&key=${API_KEY}`
        );
        const data = await response.json();

        // Si la respuesta es exitosa y contiene una ruta, se guarda en el estado.
        if (data.status === "OK" && data.routes.length > 0) {
          setDirections(data.routes[0]);
        } else {
          setError("No se pudo obtener la ruta.");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    // Si los parámetros de entrada son válidos, se llama a la función para obtener las direcciones.
    if (origin && destination) {
      fetchDirections();
    }
  }, [origin, destination]); // Se ejecuta cada vez que cambian los parámetros de entrada.

  // Retorna la ruta y un posible error.
  return { directions, error };
};

export default useDirections;
