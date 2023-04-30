import { useEffect, useRef, useCallback } from "react";
import { io } from "socket.io-client";
import { getUserToken } from "../helpers/store";
import { TOKEN } from "../helpers/const";

const useSocket = (serverUrl) => {
  const socketRef = useRef(null);

  const connect = useCallback(async () => {
    if (socketRef.current) {
      socketRef.current.disconnect();
    }
    const token = await getUserToken(TOKEN);
    const newSocket = io(serverUrl, {
      reconnectionDelayMax: 10000,
      transports: ["websocket"],
      auth: {
        authorization: `Bearer ${token}`,
      },
    });

    socketRef.current = newSocket;
    console.log("se realizado la configuracion del socket ");
    return newSocket;
  }, [serverUrl]);

  const disconnect = useCallback(() => {
    if (socketRef.current) {
      socketRef.current.disconnect();
      socketRef.current = null;
    }
  }, []);

  const emitEvent = (eventName, data) => {
    if (socketRef.current) {
      socketRef.current.emit(eventName, data);
    }
  };

  const onEvent = useCallback((eventName, callback) => {
    if (socketRef.current) {
      socketRef.current.on(eventName, callback);
    }
  }, []);

  const offEvent = useCallback((eventName, callback) => {
    if (socketRef.current) {
      socketRef.current.off(eventName, callback);
    }
  }, []);

  useEffect(() => {
    if (serverUrl) {
      const socketInstance = connect();
      return () => {
        disconnect(socketInstance);
      };
    }
  }, [connect, disconnect, serverUrl]);

  return {
    connect,
    disconnect,
    emitEvent,
    onEvent,
    offEvent,
    socket: socketRef.current,
  };
};

export default useSocket;
