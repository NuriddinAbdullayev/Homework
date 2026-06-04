import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from "../../src/i18n";
import "./Navbar.css"

export default function Navbar() {
  const { t } = useTranslation();

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  }

  return (
    <nav>
      <div>
        <button onClick={() => changeLanguage("uz")}>UZ</button>
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
      </div>

      <div className='content'>
        <h1>{t("library")}</h1>
        <a>{t("home")}</a>
        <a>{t("books")}</a>
        <button>{t("logout")}</button>
      </div>
    </nav>
  );
}