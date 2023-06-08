import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";

import { AuthContext } from "./auth";
import RequireAuth from "./auth/requireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
