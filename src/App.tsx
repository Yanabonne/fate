import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Cycles from "./pages/Cycles";
import Tarot from "./pages/Tarot";
import Moon from "./pages/Moon";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    const header = document.querySelector(".header");

    if (header) {
      header.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="fate" element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route path="cycles" element={<Cycles />} />
        <Route path="tarot" element={<Tarot />} />
        <Route path="moon" element={<Moon />} />
        <Route path="*" element={<Navigate to="fate" />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom}
      />
    </>
  );
}

export default App;
