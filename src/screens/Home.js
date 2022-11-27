import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import auth from "../utils/firebase";

function Home() {
  const [user, setUser] = useState({});
  const Navigate = useNavigate();
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const logout = async (event) => {
    event.preventDefault();
    await signOut(auth);
    Navigate("/");
  };
  var str = user.email;
  var nameMatch = str.match(/^([^@]*)@/);
  var name = nameMatch ? nameMatch[1] : null;
  return (
    <div className="column">
      <h1>Welcome {name}!</h1>
      <button onClick={logout}>Sign out</button>
    </div>
  );
}
export default Home;
