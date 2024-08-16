import React, { useEffect, useState } from "react";
import { tarotCardsList } from "../../utils/constantsTarot";
import AllCards from "./AllCards";
import OneCard from "./OneCard";

export default function TarotCard() {
  const [section, setSection] = useState("one-card");

  return (
    <>
      <h1 className="tarot__title">Таро</h1>
      <div className="tarot__buttons">
        <button
          className={
            section === "one-card"
              ? "tarot__button tarot__button_active"
              : "tarot__button"
          }
          onClick={() => {
            setSection("one-card");
          }}
        >
          Вытянуть карту
        </button>
        <button
          className={
            section === "all-cards"
              ? "tarot__button tarot__button_active"
              : "tarot__button"
          }
          onClick={() => {
            setSection("all-cards");
          }}
        >
          Все карты
        </button>
      </div>
      <section
        className={
          section === "one-card"
            ? "tarot__section tarot__section_one"
            : "tarot__section"
        }
      >
        {section === "all-cards" && (
          <>
            <AllCards
              indexStart={0}
              indexEnd={22}
              categoryName={"Старшие арканы"}
            />
            <AllCards indexStart={22} indexEnd={36} categoryName={"Жезлы"} />
            <AllCards indexStart={36} indexEnd={50} categoryName={"Кубки"} />
            <AllCards indexStart={50} indexEnd={64} categoryName={"Мечи"} />
            <AllCards indexStart={64} indexEnd={78} categoryName={"Пентакли"} />
          </>
        )}
        {section === "one-card" && <OneCard />}
      </section>
    </>
  );
}
