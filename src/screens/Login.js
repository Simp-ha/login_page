import React from "react";
function LogginButton(props) {
  return <button onClick={props.onClick}> Login</button>;
}

function Login() {
  return (
    <div>
      <header className="header">Sign in!</header>
      <form>
        <label className="container">
          E-mail:
          <input type="email" name="E-mail" />
          Password:
          <input type="password" name="Password" />
        </label>
        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
}
export default Login;
