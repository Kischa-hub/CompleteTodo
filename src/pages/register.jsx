import React from "react";

import { useTranslation } from "react-i18next";

function Register(props) {
  const { t, i18n, ready } = useTranslation(null, { useSuspense: false });

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      {<h1>{t("Welcome")}</h1>}

      <button onClick={() => changeLanguage("de")}>de</button>
      <button onClick={() => changeLanguage("en")}>en</button>
    </div>
  );
}

export default Register;
