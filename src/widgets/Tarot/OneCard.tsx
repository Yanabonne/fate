import React, { useEffect, useState } from "react";
import { tarotCardsList } from "../../utils/constantsTarot";
import cardImg from "../../images/card-back.jpg";

type TCard = {
  name: string;
  link: string;
  meaning: string;
  meaning_r: string;
  love: string;
  love_r: string;
  situation: string;
  situation_r: string;
  day: string;
  advice: string;
};

export default function OneCard() {
  const [isCardSelected, setIsCardSelected] = useState(false);
  const [selectedCard, setSelectedCard] = useState<TCard>();

  useEffect(() => {
    if (isCardSelected) {
      setSelectedCard(
        tarotCardsList[Math.floor(Math.random() * tarotCardsList.length)]
      );
    }
  }, [isCardSelected]);

  return (
    <>
      <div
        className={
          isCardSelected
            ? "tarot__flip-card tarot__flip-card_active"
            : "tarot__flip-card"
        }
        onClick={() => setIsCardSelected(!isCardSelected)}
      >
        <div className="tarot__flip-card-inner">
          <div className="tarot__flip-card-front">
            <img
              src={cardImg}
              alt="Карта"
              className="tarot__flip-img-back"
            ></img>
          </div>
          <div className="tarot__flip-card-back">
            {selectedCard && (
              <img
                src={selectedCard?.link}
                alt="Карта"
                className="tarot__flip-img-back-2"
              ></img>
            )}
          </div>
        </div>
      </div>
      {isCardSelected && selectedCard && (
        <>
          <div className="tarot_curved">
            <div className="tarot__curved_1"></div>
            <div className="tarot__curved_2"></div>
          </div>
          <div className="tarot__one-container">
            <h2 className="tarot__subtitle tarot__subtitle_one">
              {selectedCard.name}
            </h2>
            <p className="tarot__all-title">Общее значение: прямое положение</p>
            <p className="tarot__all-text">{selectedCard.meaning}</p>
            <p className="tarot__all-title">
              Общее значение: перевернутое положение
            </p>
            <p className="tarot__all-text">{selectedCard.meaning_r}</p>
            <p className="tarot__all-title">
              Значение в любви и отношениях: прямое положение
            </p>
            <p className="tarot__all-text">{selectedCard.love}</p>
            <p className="tarot__all-title">
              Значение в любви и отношениях: перевернутое положение
            </p>
            <p className="tarot__all-text">{selectedCard.love_r}</p>
            <p className="tarot__all-title">
              Значение в ситуации и вопросе: прямое положение
            </p>
            <p className="tarot__all-text">{selectedCard.situation}</p>
            <p className="tarot__all-title">
              Значение в ситуации и вопросе: перевернутое положение
            </p>
            <p className="tarot__all-text">{selectedCard.situation_r}</p>
            <p className="tarot__all-title">Значение карты дня</p>
            <p className="tarot__all-text">{selectedCard.day}</p>
            <p className="tarot__all-title">Совет карты</p>
            <p className="tarot__all-text">{selectedCard.advice}</p>
            <button
              className="tarot__new-card-button"
              onClick={() => setIsCardSelected(false)}
            >
              Выбрать другую карту
            </button>
          </div>
          <div className="tarot_curved_bottom">
            <div className="tarot__curved_3"></div>
            <div className="tarot__curved_4"></div>
          </div>
        </>
      )}
    </>
  );
}
