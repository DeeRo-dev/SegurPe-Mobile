import { io } from "socket.io-client";
import { getUserToken } from "./store";
import { TOKEN } from "./const";

let socket;

const configureSocket = async () => {
  try {
    const token = await getUserToken(TOKEN);
    if (token) {
      socket = io("wss://www.ws.segurpe.com", {
        reconnectionDelayMax: 10000,
        transports: ["websocket"],
        auth: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(socket);
      console.log("Socket.IO configurado correctamente");
    } else {
      console.log(
        "No se pudo configurar Socket.IO, URL del servidor no encontrada,tambien puede ser el token"
      );
    }
  } catch (error) {
    console.log("Error al configurar Socket.IO:", error);
  }
};

configureSocket();

export default socket;
