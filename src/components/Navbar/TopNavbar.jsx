import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const TopNavbar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="bg-blue-600 md:bg-transparent">
      <div className="container mx-auto px-4 hidden">
        <div className="flex items-center h-12 md:h-0">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-blue-700 focus:outline-none text-white"
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faXmark : faBars}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
