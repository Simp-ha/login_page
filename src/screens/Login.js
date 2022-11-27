import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../utils/firebase";

const Login = ({}) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const Navigate = useNavigate();
  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pwd);
      Navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="column">
      <h1>Sign in!</h1>
      <form onSubmit={handleSignIn}>
        <label className="column">
          Email:
          <input
            type="email"
            id="E-mail"
            onChange={(event) => setEmail(event.target.value)} //user state
            value={email} //clear fields when you sign in
            required
          />
        </label>
        <label className="column">
          Password:
          <input
            type="password"
            id="Password"
            onChange={(event) => setPwd(event.target.value)}
            value={pwd}
            required
          />
        </label>
        <p>
          <button>Sign In</button>
        </p>
      </form>
      <a href="/register"> You don't have an account? Sign up!</a>
    </div>
  );
};
export default Login;
