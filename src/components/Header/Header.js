import React from "react";
import s from "./Header.module.scss";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.headerInner}>
        <img
          src="https://img.pngio.com/book-stack-png-book-png-1024_1024.png"
          alt="logo"
          className={s.logo}
        ></img>
        <p className={s.logoText}>Please, fill the inputs</p>
      </div>
    </div>
  );
};

export default Header;