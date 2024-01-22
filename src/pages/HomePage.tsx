// simple hompage whatsware that will lead to login page (When added)

import whatswareLogo from "../assets/whatsware.svg";
import "../App.css";

import { Link, Outlet } from "react-router-dom";

function HomePage() {
  return (
    <>
      <title>WhatsWare-HomePage</title>
      <div>
        <a href="#">
          <img src={whatswareLogo} className="logo" alt="WhatsWare logo" />
        </a>
      </div>
      <h1>WhatsWare</h1>
      <div className="card">
        <nav>
          {/* <ul> */}
          {/* <li>
              <Link to="/">Homepage</Link>
            </li> */}
          <Link to="/login">
            <button
              style={{
                backgroundColor: "grey",
                border: "2px black",
                padding: "15px 32px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                margin: "4px 2px",
                cursor: "pointer",
                borderRadius: "30px",
                fontWeight: "bold",
              }}
            >
              Login with WhatsWare
            </button>
          </Link>
          {/* s */}
          {/* </ul> */}
        </nav>

        <Outlet />
      </div>
      <p className="read-the-docs">FYP 1</p>
    </>
  );
}

export default HomePage;
