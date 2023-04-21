const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoic2VndXJwZSIsImEiOiJjbGdxOG5xNGIwNDJ1M21zMmJ2OWFrcXl1In0.mA4TzKtXrH5XrLpu3Kqbzg";

/**
 * Realiza una solicitud a la API de Mapbox Directions para obtener las direcciones.
 * @param {Object} origin - El punto de origen con propiedades de latitud y longitud.
 * @param {Object} destination - El punto de destino con propiedades de latitud y longitud.
 * @returns {Promise} - Una promesa que se resuelve con la ruta y un posible error.
 */
const fetchDirections = async (origin, destination) => {
  try {
    const response = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?geometries=geojson&access_token=${MAPBOX_ACCESS_TOKEN}`
    );
    const data = await response.json();

    if (data.code === "Ok") {
      return { directions: data.routes[0], error: null };
    } else {
      return { directions: null, error: "No se pudo obtener la ruta." };
    }
  } catch (error) {
    return { directions: null, error: error.message };
  }
};

/**
 * Obtiene las direcciones entre dos puntos utilizando la API de Mapbox Directions.
 * @param {Object} origin - El punto de origen con propiedades de latitud y longitud.
 * @param {Object} destination - El punto de destino con propiedades de latitud y longitud.
 * @returns {Object} - Objeto con la ruta y un posible error.
 */
const getDirections = async (origin, destination) => {
  if (origin && destination) {
    const { directions, error } = await fetchDirections(origin, destination);
    return { directions, error };
  }
  return { directions: null, error: null };
};

export default getDirections;
