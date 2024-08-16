import React, { useEffect, useState } from "react";
import { tarotCardsList } from "../../utils/constantsTarot";
type TAllCardsProps = {
  indexStart: number;
  indexEnd: number;
  categoryName: string;
};

export default function AllCards({
  indexStart,
  indexEnd,
  categoryName,
}: TAllCardsProps) {
  const [cards, setCards] = useState(
    tarotCardsList.slice(indexStart, indexEnd).map((card) => {
      return { ...card, open: false };
    })
  );

  function toggleCard(index: number) {
    setCards(
      cards.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }

        return item;
      })
    );
  }

  return (
    <>
      <h2 className="tarot__subtitle">{categoryName}</h2>
      <div className="tarot__all">
        {cards.map((item, index) => (
          <div
            key={index}
            className={
              "tarot__all-elem " + (item.open ? "tarot__all-elem_open" : "")
            }
            onClick={() => toggleCard(index)}
          >
            <p className="tarot__all-question">{item.name}</p>
            <div className="tarot__all-answer">
              <div className="tarot__img-container">
                <img
                  alt={item.name}
                  src={item.link}
                  className="tarot__img"
                ></img>
              </div>
              <p className="tarot__all-title">
                Общее значение: прямое положение
              </p>
              <p className="tarot__all-text">{item.meaning}</p>
              <p className="tarot__all-title">
                Общее значение: перевернутое положение
              </p>
              <p className="tarot__all-text">{item.meaning_r}</p>
              <p className="tarot__all-title">
                Значение в любви и отношениях: прямое положение
              </p>
              <p className="tarot__all-text">{item.love}</p>
              <p className="tarot__all-title">
                Значение в любви и отношениях: перевернутое положение
              </p>
              <p className="tarot__all-text">{item.love_r}</p>
              <p className="tarot__all-title">
                Значение в ситуации и вопросе: прямое положение
              </p>
              <p className="tarot__all-text">{item.situation}</p>
              <p className="tarot__all-title">
                Значение в ситуации и вопросе: перевернутое положение
              </p>
              <p className="tarot__all-text">{item.situation_r}</p>
              <p className="tarot__all-title">Значение карты дня</p>
              <p className="tarot__all-text">{item.day}</p>
              <p className="tarot__all-title">Совет карты</p>
              <p className="tarot__all-text">{item.advice}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
