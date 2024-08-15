import React, { useEffect, useState } from "react";
import deckImg from "../../images/deck.png";
import cardImg from "../../images/card.png";
import wisdomImg from "../../images/wisdom.png";

const wolfQuotes = [
  "Волк не тот, кто волк, а тот, кто волк",
  "Псу - конура, волку - свобода, и никак иначе",
  "Если волк молчит, то лучше его не перебивать",
  //   "За двумя зайцами погонишься — рыбку из пруда не выловишь, делу время, а отмеришь семь раз…",
  "Бесплатный сыр бывает только бесплатным",
  "Лучше один раз упасть, чем сто раз упасть",
  "Громко — это как тихо, только громче",
  "Не стоит искать волка там, где его нет - его там нет",
  "Падение - это не провал. Провал - это провал. Падение - это где упал.",
];

export default function Main() {
  const [wolfQuote, setWolfQuote] = useState("");

  useEffect(() => {
    setWolfQuote(wolfQuotes[Math.floor(Math.random() * wolfQuotes.length)]);
  }, []);

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
          <div className="main__services-grid">
            <p className="main__text">Таро</p>
            <p className="main__text_s">
              Однокарточный расклад на классической колоде таро.
            </p>
            <button className="main__button main__button_services">
              Хочу!
            </button>
          </div>
          <div className="main__services-grid">
            <p className="main__text">Биоритмы</p>
            <p className="main__text_s">
              Включают в себя эмоциональный, психологический и интеллектуальный.
              Рассчитываются по дате рождения.
            </p>
            <button className="main__button main__button_services">
              Хочу!
            </button>
          </div>
          <div className="main__services-grid">
            <p className="main__text">Фазы луны</p>
            <p className="main__text_s">
              Фазы луны и как они влияют на нас в разных положениях.
            </p>
            <button className="main__button main__button_services">
              Хочу!
            </button>
          </div>
        </div>
      </section>
      <section className="main__dark">
        <div className="main main_motivation">
          <div className="main__container">
            <h2 className="main__title main__text_light">Обо мне</h2>
            <div className="main__text main__text_light">
              Я начала увлекаться эзотерикой ещё в школе, и рассматриваю её как
              терапию, которая позволяет заглянуть глубже в себя, свои истинные
              желания и мотивы. Вам не обязательно верить во всё, что здесь
              написано, главное enjoy and have fun!
            </div>
            <button className="main__button main__button_light main__button_about">
              О проекте
            </button>
          </div>
          <img
            className="main__img main__img_card"
            alt="Tarot card"
            src={cardImg}
          />
        </div>
      </section>
      <section className="main__beige">
        <div className="main main_wisdom">
          <h2 className="main__title main__title_1">{wolfQuote}</h2>
          <p className="main__subtitle">Мудрость дня</p>
          <img
            className="main__img main__img_wisdom"
            alt="Hands holding magic sphere"
            src={wisdomImg}
          />
        </div>
      </section>
      <div className="main main_curved_bottom">
        <div className="main__curved_3"></div>
        <div className="main__curved_4"></div>
      </div>
    </>
  );
}
