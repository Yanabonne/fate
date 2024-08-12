import React from "react";
import "../styles/Home/Home.scss";
import Header from "../shared/Header/Header";
import Main from "../widgets/Home/Main";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Main />
    </div>
  );
}
