import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Form() {
  const [inputName, setInputName] = useState("");
  const [inputDate, setInputDate] = useState("");

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputDateRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  function onFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    let isFormFilled = true;

    if (!inputName) {
      isFormFilled = false;
      inputNameRef.current?.classList.add("account__input_incorrect");
    }

    if (!inputDate) {
      isFormFilled = false;
      inputDateRef.current?.classList.add("account__input_incorrect");
    }

    if (isFormFilled) {
      localStorage.setItem("username", inputName);
      localStorage.setItem("birthday", inputDate);
      navigate("/fate");
    }
  }

  useEffect(() => {
    setInputName(
      localStorage.getItem("username")
        ? `${localStorage.getItem("username")}`
        : ""
    );
    setInputDate(
      localStorage.getItem("birthday")
        ? `${localStorage.getItem("birthday")}`
        : ""
    );
  }, []);

  return (
    <>
      <form className="account__form" onSubmit={onFormSubmit}>
        <h1 className="account__title">Заполните свои данные</h1>
        <label className="account__label" htmlFor="name">
          Ваше имя
        </label>
        <input
          placeholder="Введите своё имя"
          className="account__input"
          value={inputName}
          ref={inputNameRef}
          onChange={(e) => {
            setInputName(e.target.value);
            inputNameRef.current?.classList.remove("account__input_incorrect");
          }}
        ></input>
        <label className="account__label" htmlFor="name">
          Ваша дата рождения
        </label>
        <input
          placeholder="Введите свою дату рождения"
          className="account__input"
          type="datetime-local"
          value={inputDate}
          ref={inputDateRef}
          onChange={(e) => {
            setInputDate(e.target.value);
            inputDateRef.current?.classList.remove("account__input_incorrect");
          }}
        ></input>
        <button type="submit" className="account__button">
          Сохранить
        </button>
        <p className="account__text">
          * Мы не собираем и не сохраняем ваши данные, они хранятся локально в
          вашем браузере
        </p>
      </form>
    </>
  );
}
