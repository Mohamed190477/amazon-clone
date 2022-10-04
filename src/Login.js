import React, { useState } from "react";
import "./Login.css";
import Amazon from "./Amazon_logo.svg.png";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase";
import { useStateValue } from "./StateProvider";

//rafihQazi@gmail.com

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //some fancy firebase login shiiittttt...... !!!
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const register = (e) => {
    e.preventDefault();

    //some fancy firebase login shiiittttt...... !!!
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={Amazon} alt="amazon" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="" method="">
          <h5>Email</h5>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Your email"
          />
          <h5>Password</h5>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Your password"
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign in
          </button>
        </form>
        <p>
          Welcome to Amazon.com. Amazon.com Services LLC and/or its affiliates
          ("Amazon") provide website features and other products and services to
          you when you visit or shop at Amazon.com
        </p>
        <button onClick={register} className="login__registerButton">
          Create an account
        </button>
      </div>
    </div>
  );
};

export default Login;
