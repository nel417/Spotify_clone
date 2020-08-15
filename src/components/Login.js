import React from "react";
import "./StyleSheets/Login.css";
import logo from "./logo.gif";
import { loginUrl } from "../spotify";

export default function Login() {
  return (
    <div className="login">
      <img src={logo} alt="spotify logo" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}
