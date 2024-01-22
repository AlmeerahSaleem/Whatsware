import whatswareLogo from "../../assets/whatsware.svg";
import "./Dashboard.css";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <title>WhatsWare-Dashboard</title>
      <div>
        <a href="#">
          <img src={whatswareLogo} className="logo" alt="WhatsWare logo" />
        </a>
      </div>
      <h1>WhatsWare</h1>
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

        <button>
          <Link to="/Login">Sign Out</Link>
        </button>

        <Outlet />
      </div>
      <p className="read-the-docs">FYP 1</p>
    </>
  );
}

export default Dashboard;
