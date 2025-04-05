import React, { useState } from "react";
import TopNavbar from "../Navbar/TopNavbar";
import MainNavbar from "../Navbar/MainNavbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <TopNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MainNavbar isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
