import React from "react";
import world from "./images/world.svg";

function Header() {
  return (
    <header>
      <img src={world} alt="" />
      <h3>my travel journal.</h3>
    </header>
  );
}

export default Header;
