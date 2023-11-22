import "./App.css";
import LoginPage from "./pages/LoginPage";

import { Route, Routes } from "react-router-dom";
import { MyContext } from "./MyContext";
import { useEffect, useState } from "react";
import users from "./data";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log("User updated:", user);
  }, [user]);
  return (
    <>
      <MyContext.Provider value={{ user, setUser, users }}>
        <div className="App" style={{ backgroundColor: "#eeee" }}>
          <Routes>
            <Route path="/" element={!user && <LoginPage />} />
            <Route path="/dashboard" element={<Home />} />
          </Routes>
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
