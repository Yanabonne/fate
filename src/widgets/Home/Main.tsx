import React from "react";
import deckImg from "../../images/deck.png";

export default function Main() {
  return (
    <>
      <section className="main main_1">
        <h1 className="main__title main__title_1">
          Немного магии и ничего лишнего
        </h1>
        <p className="main__subtitle">
          Узнай своё прошлое, настоящее и будущее
        </p>
        <img
          className="main__img main__img_deck"
          alt="Tarot cards deck"
          src={deckImg}
        />
      </section>
      <div className="main main_curved">
        <div className="main__curved_1"></div>
        <div className="main__curved_2"></div>
      </div>
      <section className="main__beige">
        <div className="main main_services">
          <h2 className="main__title">Гадания, расклады и расчёты</h2>
        </div>
      </section>
    </>
  );
}
