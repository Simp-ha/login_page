import "./Register.css";
import { useContext, useState } from "react";
import { Route, useNavigate } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth, { AuthContext } from "../utils/firebase";
import Home from "./Home";

const Register = ({}) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const Navigate = useNavigate();
  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, pwd);
      Navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="column">
      <h1>MAKE ACCOUNT!</h1>
      <form onSubmit={handleSignup}>
        <label className="column">
          Set E-mail:
          <input
            type="email"
            id="E-mail"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />
        </label>
        <label className="column">
          Set password:
          <input
            type="password"
            id="password"
            onChange={(event) => setPwd(event.target.value)}
            value={pwd}
            required
          />
        </label>
        <p>
          <button type="submit">Sign Up</button>
        </p>
      </form>
      <a href="/"> You have already an account? Sign in!</a>
    </div>
  );
};
export default Register;
