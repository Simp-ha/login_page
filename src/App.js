import "./App.css";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthProvider } from "./utils/firebase";
import { PrivateRoute } from "./utils/privateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
