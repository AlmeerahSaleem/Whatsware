//updated websocket, communication maintained

import { useEffect, useState } from "react";
import "./WebSocket.css";
import { io } from "socket.io-client";
import { Link, Outlet } from "react-router-dom";

function WebSocket() {
  const [connectedClients, setConnectedClients] = useState([]);
  const [socketClient, setSocketClient] = useState(null);

  useEffect(() => {
    // Connect to the WebSocket server
    const socket = io("ws://localhost:8000");

    // Listen for successful connection
    socket.on("connect", () => {
      console.log("Connected to server");

      // Update the list of connected clients
      setConnectedClients((prevClients) => [
        ...prevClients,
        { id: socket.id, messages: [] },
      ]);
    });

    // Listen for disconnections
    socket.on("disconnect", (reason) => {
      console.log("Client disconnected: " + reason);

      // Update the list of connected clients
      setConnectedClients((prevClients) =>
        prevClients.filter((client) => client.id !== socket.id)
      );
    });

    // Save the socket instance to state
    setSocketClient(socket);

    // Clear the interval when the component is unmounted
    return () => {
      socket.disconnect();
    };
  }, []);

  // Function to send a message to the server
  const sendMessageToServer = (message) => {
    if (socketClient) {
      socketClient.emit("message", message);

      // Add the message to the list of messages for the current client
      setConnectedClients((prevClients) =>
        prevClients.map((client) =>
          client.id === socketClient.id
            ? { ...client, messages: [...client.messages, message] }
            : client
        )
      );
    } else {
      console.error("Socket connection not established");
    }
  };

  const disconnectClient = (message) => {
    if (socketClient) {
      // const message = `disconnected`;
      socketClient.emit("message", message);

      // Disconnect from the server
      socketClient.disconnect();

      setConnectedClients((prevClients) =>
        prevClients.map((client) =>
          client.id === socketClient.id
            ? { ...client, messages: [...client.messages, message] }
            : client
        )
      );

      // Update the list of connected clients
      setConnectedClients((prevClients) =>
        prevClients.filter((client) => client.id !== socketClient.id)
      );

      // Prevent further communication with the server
      setSocketClient(null);
    } else {
      console.error("Socket unable to disconnect");
    }
  };

  return (
    <>
      <title>WhatsWare-Commute Channel</title>

      <div className="card">
        <nav className="dashboard-nav">
          <ul>
            <li>
              <h3>
                <Link to="/Dashboard">Profile</Link>
              </h3>
            </li>
            <li>
              <h3>
                <Link to="/WebSocket">Communication</Link>
              </h3>
            </li>
          </ul>
        </nav>

        <div className="Communicate" style={{ paddingLeft: "200px" }}>
          <h1>Communication Channel</h1>

          <div
            className="card"
            style={{
              border: "5px black",
              background: "black",
              borderRadius: "10px",
              maxWidth: "500px",
              position: "-webkit-sticky",
              alignSelf: "center",
            }}
          >
            <div>
              <p>Connected Clients:</p>
              {connectedClients.map((client) => (
                <li key={client.id}>
                  {client.id} - Messages: {client.messages.join(", ")}
                </li>
              ))}
            </div>

            <button onClick={() => sendMessageToServer("Hello from React!")}>
              Send Message to Server
            </button>
            <br></br>
            <button onClick={() => disconnectClient("Client disconnected")}>
              Disconnect
            </button>
          </div>
        </div>

        <Outlet />
      </div>
      <p className="read-the-docs">FYP 1</p>
    </>
  );
}

export default WebSocket;
