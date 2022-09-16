import React, { useEffect, useState } from "react";

import Logo from "../assets/img/namelogo-gr-bg.png";
import Logo2 from "../assets/img/namelogo-bl-bg.png";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Socials from "../components/Socials";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${bg ? "bg-tertiary h-20" : "h-24"} flex items-center w-full 
    fixed top-0 text-white z-10 transition-all duration-300`}
    >
      <div
        className="container mx-auto h-full flex
        items-center justify-between"
      >
        {/* logo */}
        <a href="#">
          {bg ? <img src={Logo} alt="logo" /> : <img src={Logo2} alt="logo" />}
        </a>

        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* Socials */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* NavMobile */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
