import React, { useEffect } from "react";
import { tarotCardsList } from "../../utils/constantsTarot";

export default function TarotCard() {
  return (
    <>
      <h1>{tarotCardsList[0]?.name}</h1>
      <img src="https://serennu.com/tarot/rw/0m.jpg"></img>
    </>
  );
}
