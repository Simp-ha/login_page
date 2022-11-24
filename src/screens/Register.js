import React from "react";
import "./Register.css";
function Register() {
  return (
    <div className="column">
      <header className="header">Sign in!</header>
      <form>
        <label className="column">
          Set E-mail:
          <input type="email" name="E-mail" />
          Set password:
          <input type="password" name="Password" />
        </label>
        <input type="submit" value="Sign up" />
      </form>
      <a href="/"> You have already an account? Sign in!</a>
    </div>
  );
}
export default Register;
