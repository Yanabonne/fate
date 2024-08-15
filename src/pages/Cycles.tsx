import React, { useEffect } from "react";
import "../styles/Cycles/Cycles.scss";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import ChartCycles from "../widgets/Cycles/ChartCycles";

export default function Cycles() {
  return (
    <div className="cycles">
      <Header />
      <h1 className="cycles__title">Биоритмы</h1>
      <ChartCycles />
      <Footer />
    </div>
  );
}
