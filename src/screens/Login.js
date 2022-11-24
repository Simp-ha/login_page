import React from "react";
import "./Login.css";
function LogginButton(props) {
  return <button onClick={props.onClick}> Login</button>;
}

function Login() {
  return (
    <div className="column">
      <header className="header">Sign in!</header>
      <form>
        <label className="column">
          E-mail:
          <input type="email" name="E-mail" />
          Password:
          <input type="password" name="Password" />
        </label>
        <input type="submit" value="Sign in" />
      </form>
      <a href="/register"> Don't you have an account? Sign up!</a>
    </div>
  );
}
export default Login;
