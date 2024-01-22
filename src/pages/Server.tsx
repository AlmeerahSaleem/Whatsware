import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:8000");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("reply", (data) => {
      setMessage(data);
    });
    socket.on("message", (data) => {
      // setMessages((prevMessage) => prevMessage + "\n" + data);
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, [socket]);

  const sendMessage = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    socket.emit("message", message);
    setMessage("");
    socket.emit("reply", message);
  };

  return (
    <div>
      <div className="card" style={{ border: "2px black", background: "grey" }}>
        <h1>Chat</h1>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              border: "2px solid black",
              width: "250px",
              height: "33px",
            }}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
