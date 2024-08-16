import React, { useEffect } from "react";
import "../styles/Tarot/Tarot.scss";
import Header from "../shared/Header/Header";
import TarotCard from "../widgets/Tarot/TarotCard";
import Footer from "../shared/Footer/Footer";

export default function Tarot() {
  return (
    <div className="tarot">
      <Header />
      <TarotCard />
      <Footer />
    </div>
  );
}
