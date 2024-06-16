import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <>
      <header id="header">
        <h1>
          <a href="/">掲示板</a>
        </h1>
        <nav>
          <div id="create-thread">
            <a href="/create">スレッドを立てる</a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
