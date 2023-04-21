// Importamos las dependencias necesarias
import { useEffect, useState, useCallback } from "react";
import { io } from "socket.io-client";

// Creamos el custom hook `useSocket` que recibe como parámetro la URL del servidor
const useSocket = (serverUrl) => {
  // Declaramos el estado para almacenar la instancia del socket
  const [socket, setSocket] = useState(null);

  // Función para conectar el socket al servidor, utilizando `useCallback` para evitar re-creaciones innecesarias
  const connect = useCallback(() => {
    // Creamos una nueva instancia del socket y nos conectamos al servidor
    const newSocket = io(serverUrl);
    // Actualizamos el estado con la nueva instancia del socket
    setSocket(newSocket);
    return newSocket;
  }, [serverUrl]);

  // Función para desconectar el socket del servidor
  const disconnect = useCallback(() => {
    if (socket) {
      // Desconectamos el socket del servidor y actualizamos el estado
      socket.disconnect();
      setSocket(null);
    }
  }, [socket]);

  // Función para emitir eventos al servidor
  const emitEvent = (eventName, data) => {
    if (socket) {
      // Emitimos el evento y los datos al servidor
      socket.emit(eventName, data);
    }
  };

  // Función para escuchar eventos provenientes del servidor
  const onEvent = (eventName, callback) => {
    if (socket) {
      // Escuchamos el evento y ejecutamos la función `callback` cuando se reciba
      socket.on(eventName, callback);
    }
  };

  // Función para dejar de escuchar eventos provenientes del servidor
  const offEvent = (eventName, callback) => {
    if (socket) {
      // Dejamos de escuchar el evento y desvinculamos la función `callback`
      socket.off(eventName, callback);
    }
  };

  // Al desmontar el componente, nos aseguramos de desconectar el socket
  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [disconnect]);

  // Retornamos las funciones y el objeto socket para utilizarlos en el componente
  return { connect, disconnect, emitEvent, onEvent, offEvent, socket };
};

export default useSocket;
