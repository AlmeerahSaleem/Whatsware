import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login/Login.jsx";
import WebSocket from "../pages/WebSocket/WebSocket.tsx";
import Dashboard from "../pages/Dashboard/Dashboard.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";
import Server from "../pages/server.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <Login /> },
      { path: "WebSocket", element: <WebSocket /> },
      { path: "Server", element: <Server /> },
      { path: "Dashboard", element: <Dashboard /> },
      { path: "Error", element: <ErrorPage /> },
    ],
  },
]);
