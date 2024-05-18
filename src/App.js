import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/register";
import Home from "./components/Home";
import Panel from "./components/panel";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/profile";
import { useState } from "react";
import { auth } from "./components/firebase";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    
      <div className="App">
        {/* <div className="auth-wrapper"> */}
          {/* <div className="auth-inner"> */}
          <Router>
            <Routes>
              <Route
                path="/"
                element={<Home/>}
              />
               <Route
                path="/"
                element={user ? <Navigate to="/profile" /> : <Login />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/panel" element={<Panel />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <ToastContainer />
            </Router>
          </div>
         
        // </div>
      // </div>
    
  );
}

export default App;
