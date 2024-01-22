// login with google in vite - js

import whatswareLogo from "../../assets/whatsware.svg";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import "./Login.css";
import { Link, Outlet } from "react-router-dom";

function Login() {
  //storing info/user
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  // const [manualLogin, setmanualLogin] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
    //add validations
    console.log(`Email: ${email}, Password: ${password}`);
  };

  // const handleError = () => {};

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);

    // Extract the registration ID from the user's email address
    var regid = userObject.email.substring(4, userObject.email.length - 11);
    // Create a new user object that includes the registration ID
    //regid: userObject.regid,
    var newUser = {
      name: userObject.name,
      email: userObject.email,
      picture: userObject.picture,
      regid: regid,
    };
    // validate email domain
    // if (userObject.email.endsWith("@szabist.pk")) {
    //   // storing user
    //   setUser(userObject);
    //   // hides that login button after logging in
    //   document.getElementById("signinDiv").hidden = true;
    //   //   document.getElementById("card").hidden = true;
    // } else {
    //   // display error message if the email is not from szabist.pk
    //   alert(
    //     "Only users with szabist.pk email addresses are allowed to log in."
    //   );
    // }

    if (userObject.email.endsWith("@szabist.pk")) {
      // storing user
      setUser(newUser);
      // hides that login button after logging in
      setIsSignedIn(true);
      setmanualLogin(false);
    } else {
      // display error message if the email is not from szabist.pk
      alert("Only users with szabist emails can login.");
    }
  }

  function handleSignOut(event) {
    //managing cahe with state
    // setUser({});
    // document.getElementById("signinDiv").hidden = false;
    setUser(null);
    setIsSignedIn(false);
    setmanualLogin(true);
  }

  useEffect(() => {
    /* global google */

    // client initialised
    google.accounts.id.initialize({
      client_id:
        "453280701023-e5ffbu2t0ebolklq78o72f8g8392nqnf.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    //button getting rendored
    google.accounts.id.renderButton(document.getElementById("signinDiv"), {
      theme: "filled_black",
      size: "large",
      shape: "pill",
      width: "450px", // increase the width here
      //   height: "50px",
      logo_alignment: "left",
    });
    //one tap dialogue??
    //load page first time >> promt user to log in *easily*
    //shows accounts u recently used to log in
    //acc we have in google cache
    // google.accounts.id.prompt();
  }, []);

  //if we have no user: signin button
  //if we have a user: show logout button

  return (
    <>
      <title>WhatsWare-Login</title>
      <div
        className="card"
        style={{
          border: "20px #1B4332",
          borderRadius: "10px",
          backgroundColor: "#333333",
        }}
      >
        <div>
          <img
            src={whatswareLogo}
            className="logo whatsware"
            alt="WhatsWare logo"
            style={{ width: "70%", height: "70%" }}
          />

          {!isSignedIn && (
            <div className="login">
              <form className="manualLogin" onSubmit={handleLogin}>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  <input
                    type="text"
                    placeholder="SZABIST Email"
                    value={email}
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: "100%",
                      padding: 10,
                      border: "1px solid #d9d9d9",
                      borderRadius: 5,
                      boxSizing: "border-box",
                      fontSize: 16,
                      color: "#212121",
                      backgroundColor: "#fff",
                      marginBottom: -7 /* Add spacing between fields*/,
                    }}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    style={{
                      width: "100%",
                      padding: 10,
                      border: "1px solid #d9d9d9",
                      borderRadius: 5,
                      boxSizing: "border-box",
                      fontSize: 16,
                      color: "#212121",
                      backgroundColor: "#fff",
                    }}
                  />
                  <Link to="/Dashboard">
                    <button>Login with WhatsWare</button>
                  </Link>
                </div>
              </form>
            </div>
          )}

          {!isSignedIn && <div id="signinDiv"></div>}

          <div
            id="signinDiv"
            style={{
              backgroundColor: "transparent",
            }}
          ></div>

          {isSignedIn && (
            <div>
              <img src={user.picture} />
              <h3>
                {user.name} {user.regid}
              </h3>

              <Link to="/Dashboard">
                <button
                  style={{
                    backgroundColor: "grey",
                    border: "2px black",
                    // color: "white",
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
                  Go to Dashboard
                </button>
              </Link>
              {/* user actually has full user attributes
              which means our user is logged in */}
              {/* <button onClick={(e) => handleSignOut(e)}>Sign Out</button> */}
            </div>
          )}

          {/* {user && (
            <div>
              <img src={user.picture}></img>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>Registration ID: {user.regid}</p>
            </div>
          )} */}

          {/* {Object.keys(user).length != 0 && (
            <div>
              <img src={user.picture} />
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.regid}</p>
              user actually has full user attributes
              which means our user is logged in
              <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
            </div>
          )} */}

          {/* user actually has full user attributes
              which means our user is logged in */}
          {/* {Object.keys(user).length != 0 && (
            <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
          )} */}

          {/* <button>Login with Google</button> */}
        </div>
      </div>
    </>
  );
}

export default Login;
