import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const signinData = await auth.signInWithEmailAndPassword(email, password);
      if (signinData) {
        history.push("/");
      }
      console.log("signin Data", signinData);
    } catch (error) {
      console.log("signin error", error);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const authData = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      if (authData) {
        history.push("/");
      }
      console.log("authData", authData);
    } catch (error) {
      console.log("authData error", error);
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__signInButton" onClick={signIn}>
            Sign In
          </button>
          <p>
            By continuing, you agree to <strong>Utpal Amazon Clone </strong>
            Conditions of Use and Privacy Notice.
            <br /> We use cookies for a better browser experience.
          </p>
          <button className="login__registerButton" onClick={register}>
            Create your account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
