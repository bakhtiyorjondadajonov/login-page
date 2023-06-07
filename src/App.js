import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import { useContext } from "react";
import { AuthContext } from "./auth";

function App() {
  const { authed } = useContext(AuthContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        {authed && <Route path="/" element={<Home />} />}
      </Routes>
    </div>
  );
}

export default App;
