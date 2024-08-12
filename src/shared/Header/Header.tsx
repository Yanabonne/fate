import React, { useState, useEffect } from "react";
import "../../styles/shared/Header.scss";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {}, []);

  return (
    <header className="header">
      <svg className="header__logo">
        <g fill="#262225">
          <path d="M3.08 12 l16.96 -0.000078124 c0.36 0 0.68 0.28 0.68 0.64 c0 0.4 -0.32 0.68 -0.68 0.68 l-12.52 0 l0 13.2 l8.04 0 c0.36 0 0.68 0.28 0.68 0.64 s-0.32 0.68 -0.68 0.68 l-8.04 0 l0 11.44 c0 0.10281 -0.026406 0.19922 -0.071992 0.28442 c-0.083204 0.25641 -0.32 0.43564 -0.6084 0.43564 l-3.76 0 c-0.36 0 -0.68 -0.28 -0.68 -0.64 l0.0012109 -0.04078 c-0.00078124 -0.012812 -0.0011719 -0.026016 -0.0011719 -0.039219 l0 -26.4 c0 -0.08078 0.014414 -0.15758 0.040428 -0.23996 c0 -0.36 0.28 -0.64 0.64 -0.64 l0 0 z M6.2 13.32 l-2.48 0 l0 25.36 l2.48 0 l0 -25.36 z M38.497 12.559999999999999 l10.96 26.52 c0.16 0.36 0 0.76 -0.36 0.88 c-0.08 0.04 -0.16 0.04 -0.24 0.04 l-0.076408 -0.0051952 c-0.027188 0.0032031 -0.055196 0.0051952 -0.083592 0.0051952 l-3.7312 -0.00039062 l-0.0092188 0 c-0.27121 -0.0076172 -0.5024 -0.16562 -0.6196 -0.39961 l-4.6376 -11.222 l-5.2024 5.022 c-0.16 0.12 -0.32 0.16 -0.48 0.16 c-0.091212 0 -0.18242 -0.013203 -0.27363 -0.053984 c-0.1052 -0.020391 -0.2048 -0.064804 -0.28602 -0.14602 l-5.2128 -5 l-4.7072 11.4 c-0.12 0.24 -0.32 0.4 -0.6 0.4 c-0.08 0 -0.16 0 -0.28 -0.04 c-0.32 -0.16 -0.48 -0.52 -0.36 -0.88 l11.04 -26.64 c0.044412 -0.11879 0.12723 -0.2152 0.23043 -0.28398 l0.16961 -0.11602 c0.36 -0.12 0.72 0.04 0.88 0.36 l10.796 26.124 l2.4764 0.026797 l-10.593 -25.632 c-0.16 -0.36 0 -0.72 0.36 -0.88 c0.32 -0.12 0.72 0.04 0.84 0.36 z M30.331 23.306 l3.6644 3.4916 l3.6136 -3.4756 l-3.644 -8.8172 z M39.153 27.058 l-0.9988 -2.416 l-3.658 3.5188 c-0.16 0.12 -0.32 0.16 -0.48 0.16 c-0.091212 0 -0.18242 -0.013203 -0.27363 -0.053984 c-0.1052 -0.020391 -0.2048 -0.064804 -0.28602 -0.14602 l-3.6596 -3.5216 l-1.0084 2.4416 l5.2076 4.9948 z M53.706 19.2 c-0.28 0 -0.52 -0.2 -0.6 -0.44 c-0.12 -0.36 0.08 -0.72 0.4 -0.8 l19.88 -5.92 c0.36 -0.12 0.68 0.08 0.8 0.4 c0.08 0.36 -0.08 0.72 -0.44 0.8 l-19.88 5.92 c-0.04 0.04 -0.12 0.04 -0.16 0.04 z M74.626 16.24 c0.08 0.36 -0.08 0.67996 -0.44 0.79996 l-7.16 2.0156 l0 20.304 c0 0.36 -0.28 0.64 -0.64 0.64 l-3.6 0 c-0.36 0 -0.64 -0.28 -0.64 -0.64 l0 -18.931 l-8.28 2.3308 c-0.04 0 -0.08 0.04 -0.16 0.04 c-0.28 0 -0.52 -0.2 -0.6 -0.48 c-0.08 -0.32 0.08 -0.64 0.44 -0.76 l20.32 -5.76 c0.32 -0.08 0.68 0.12 0.76 0.44 l0 0.000039062 z M65.746 19.416 l-2.3368 0.65756 l0.016797 0.12641 l0 18.56 l2.32 0 l0 -19.344 z M86.9602 38.68 l14.971 -0.000039062 c0.36 0 0.64 0.28 0.64 0.64 s-0.28 0.68 -0.64 0.68 l-17.08 0 c-0.36 0 -0.68 -0.32 -0.6788 -0.7188 c-0.00078124 -0.013594 -0.0011719 -0.027578 -0.0011719 -0.041172 l0 -26.6 c0 -0.36 0.28 -0.64 0.68 -0.64 l17.08 0 c0.36 0 0.64 0.28 0.64 0.68 c0 0.11078 -0.026797 0.21438 -0.073984 0.30438 c-0.014805 0.073592 -0.042812 0.14641 -0.086016 0.21562 l-8.1256 13.4 l5.7656 0 c0.36 0 0.64 0.32 0.64 0.68 s-0.28 0.64 -0.64 0.64 l-6.566 0 z M85.491 38.51 l15.275 -25.19 l-2.7036 0 l-0.051212 0.12 l-12.52 20 l0 5.07 z M96.501 13.32 l-11.01 0 l0 17.609 z"></path>
        </g>
      </svg>
      <nav className="header__nav">
        <a
          className={
            activeLink === "about"
              ? "header__link header__link_active"
              : "header__link"
          }
          href=""
        >
          О проекте
        </a>
        <a
          className={
            activeLink === "tarot"
              ? "header__link header__link_active"
              : "header__link"
          }
          href=""
        >
          Таро
        </a>
        <a
          className={
            activeLink === "cycles"
              ? "header__link header__link_active"
              : "header__link"
          }
          href=""
        >
          Циклы жизни
        </a>
        <a
          className={
            activeLink === "moon"
              ? "header__link header__link_active"
              : "header__link"
          }
          href=""
        >
          Фазы луны
        </a>
      </nav>
    </header>
  );
}
