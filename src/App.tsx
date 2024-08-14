import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="fate" element={<Home />} />
        <Route path="*" element={<Navigate to="fate" />} />
      </Routes>
    </>
  );
}

export default App;
