import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import whatswareLogo from "./assets/whatsware.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router";
import { socket } from "./socket";

function App() {
  useEffect(() => {
    setInterval(() => {
      socket.emit("client", { n: Date() });
    }, 2000);

    socket.on("reply", (data) => {
      //console.log("Client disconnected");

      console.log(`client receives ${JSON.stringify(data)} - ${socket.id}`);
      //io.to(socket.id).emit('reply', data);
    });
  }, []);
  return (
    <>
      {/* <div>
        <a href="#">
          <img
            src={whatswareLogo}
            className="logo whatsware"
            alt="WhatsWare logo"
          />
        </a>
      </div>
      <h1>WhatsWare</h1> */}
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
