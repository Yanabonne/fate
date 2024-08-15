import React, { useEffect } from "react";
import "../styles/Cycles/Cycles.scss";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import ChartCycles from "../widgets/Cycles/ChartCycles";
import CyclesInfo from "../widgets/Cycles/CyclesInfo";

export default function Cycles() {
  return (
    <div className="cycles">
      <Header />
      <h1 className="cycles__title">Биоритмы</h1>
      <ChartCycles />
      <CyclesInfo />
      <div className="cycles_curved_bottom">
        <div className="cycles__curved_3"></div>
        <div className="cycles__curved_4"></div>
      </div>
      <Footer />
    </div>
  );
}
