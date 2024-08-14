import React from "react";
import "../styles/Account/Account.scss";
import Form from "../widgets/Account/Form";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

export default function Account() {
  return (
    <div className="account">
      <Header />
      <Form />
      <Footer noIcon={true} topBorder={true} />
    </div>
  );
}
