import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Cycles from "./pages/Cycles";

function App() {
  return (
    <>
      <Routes>
        <Route path="fate" element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route path="cycles" element={<Cycles />} />
        <Route path="*" element={<Navigate to="fate" />} />
      </Routes>
    </>
  );
}

export default App;
