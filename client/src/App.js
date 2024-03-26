import "./App.css";

import React from "react";
import Route from "./pages/components/routes/Routes.jsx";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="w-screen">
      <Outlet />
      <Route />
    </div>
  );
};

export default App;
