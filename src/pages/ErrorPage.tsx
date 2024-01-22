import whatswareLogo from "../assets/whatsware.svg";
import "./Login/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div
        className="card"
        style={{
          border: "20px #1B4332",
          borderRadius: "10px",
          backgroundColor: "#333333",
        }}
      >
        <p>
          <img
            src={whatswareLogo}
            className="logo whatsware"
            alt="WhatsWare logo"
            style={{ width: "40%", height: "40%" }}
          />
          <h3>Error!</h3>
          <p>
            <b>Can't Login:</b> Please make sure you used the correct email to
            login i.e szabist email
          </p>
          <p>
            try Logging <Link to="/Login">again</Link>
          </p>
        </p>
      </div>
    </>
  );
}

export default Login;
