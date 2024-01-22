import { useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router";
import { socket } from "./socket";

function App() {
  useEffect(() => {
    setInterval(() => {
      socket.emit("client", { n: Date() });
    }, 2000);

    socket.on("reply", (data) => {
      console.log(`client receives ${JSON.stringify(data)} - ${socket.id}`);
    });
  }, []);
  return (
    <>
      <div className="card">
        <>
          <Outlet />
        </>
        <p className="read-the-docs">
          Almeerah Saleem 2012197 || Maria Sajid Gaddi 2012210
        </p>
        FYP 1
      </div>
    </>
  );
}

export default App;
