import { io } from "socket.io-client";

export const initSocket = async () => {
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };

  // console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);

  return io("https://code-editor-backend-zrez.onrender.com", options);
};
