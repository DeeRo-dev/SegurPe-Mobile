import axios from "axios";

// Crea una instancia de axios con una configuración predeterminada
const api = axios.create({
  baseURL: "https://backend.segurpe.com/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

/**
 * Realiza una petición HTTP utilizando Axios.
 *
 * @param {string} method - El método HTTP para la petición (por ejemplo, 'GET', 'POST', 'PUT', 'DELETE', etc.).
 * @param {string} url - La ruta de la API que deseas llamar (por ejemplo, '/usuarios' o '/publicaciones').
 * @param {Object} [data=null] - El objeto de datos que se enviará como cuerpo de la petición en métodos POST, PUT, etc.
 * @param {Object} [headers=null] - Un objeto que contiene encabezados personalizados para la petición.
 * @param {Object} [uploadFile=null] - Un objeto que contiene información sobre el archivo a cargar (por ejemplo, { uri: 'file://...', name: 'image.jpg', type: 'image/jpeg' }).
 * @returns {Promise<Object>} Un objeto que contiene el resultado de la petición, incluido el éxito/fracaso, los datos y el código de estado.
 */
const performRequest = async (
  method,
  url,
  data = null,
  headers = {},
  uploadFile = null
) => {
  try {
    const config = {
      method,
      url,
      data,
      headers,
    };

    if (uploadFile) {
      const formData = new FormData();

      formData.append("file", {
        uri: uploadFile.uri,
        name: uploadFile.name,
        type: uploadFile.type,
      });

      if (data) {
        Object.entries(data).forEach(([key, value]) => {
          formData.append(key, value);
        });
      }

      config.data = formData;
      config.headers = {
        ...headers,
        "Content-Type": "multipart/form-data",
      };
    }

    const response = await api(config);

    return {
      success: true,
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    console.error("API request error:", error);

    const errorMessage = error?.response?.data?.message || error.message;

    return {
      success: false,
      message: errorMessage,
      status: error.response?.status || null,
    };
  }
};

export { performRequest };
