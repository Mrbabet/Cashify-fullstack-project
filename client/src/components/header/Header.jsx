// import React, { useState } from "react";
import css from "../../components/header/Header.module.css";
const Header = () => {
  return (
    <header className={css.headerContainer}>
      <div className={css.header}>
        <div className={css.headerlogo}></div>
      </div>
    </header>
  );
};

export default Header;
