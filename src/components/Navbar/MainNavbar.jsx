import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faQuestionCircle,
  faGear,
  faChevronDown,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import User from "../../assets/user.jpg";
import Logo from "../../assets/Logo.png";

const MainNavbar = ({ isMenuOpen }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      title: "Danh mục",
      link: "#",
      subItems: ["Sản phẩm", "Dịch vụ", "Nhà cung cấp"],
    },
    {
      title: "Bán & Xuất hàng",
      link: "#",
      subItems: ["Đơn hàng", "Báo giá", "Trả hàng"],
    },
    {
      title: "Mua & Nhập hàng",
      link: "#",
      subItems: ["Đơn mua", "Nhập kho", "Trả hàng NCC"],
    },
    {
      title: "Kho & Sản xuất",
      link: "#",
      subItems: ["Tồn kho", "Kiểm kho", "Sản xuất"],
    },
    {
      title: "Kế toán",
      link: "#",
      subItems: ["Thu chi", "Công nợ", "Sổ quỹ"],
    },
    {
      title: "Báo cáo & Thống kê",
      link: "#",
      subItems: ["Bán hàng", "Tài chính", "Tổng hợp"],
    },
    {
      title: "Tiện ích",
      link: "#",
      subItems: ["Cài đặt", "Trợ giúp", "Hướng dẫn"],
    },
  ];

  return (
    <div className="bg-[#003DA0] p-4 text-white">
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation with Logo */}
          <nav className="hidden md:flex items-center space-x-4">
            <div w-48>
              <img src={Logo} alt="Logo" className="h-8 w-auto mr-4" />
            </div>
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center py-2 text-sm font-medium hover:bg-blue-600 rounded-md transition-colors duration-200">
                  {item.title}
                  {/* <FontAwesomeIcon
                    icon={faChevronDown}
                    className="ml-1 w-3 h-3"
                  /> */}
                </button>

                {/* Dropdown Menu */}
                {/* {activeDropdown === index && (
                  <div className="absolute z-50 left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )} */}
              </div>
            ))}
          </nav>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Desktop Search */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className={`bg-[#FFFFFF33] text-white placeholder-gray-300 pl-8 pr-4 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-48 lg:w-48 transition-all duration-200 ${
                  isSearchFocused ? "w-52  lg:w-80" : ""
                }`}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-300"
              />
            </div>

            <div className="flex items-center space-x-3">
              <button className="hidden sm:block hover:bg-blue-600 p-2 rounded-full transition-colors duration-200">
                <FontAwesomeIcon icon={faGear} className="w-5 h-5" />
              </button>
              <button className="hidden sm:block hover:bg-blue-600 p-2 rounded-full transition-colors duration-200">
                <FontAwesomeIcon icon={faRotate} className="w-5 h-5" />
              </button>
              <button className="hover:bg-blue-600 p-2 rounded-full transition-colors duration-200 relative">
                <FontAwesomeIcon icon={faMessage} className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </button>
              <button className="hover:bg-blue-600 p-2 rounded-full transition-colors duration-200 relative">
                <FontAwesomeIcon icon={faBell} className="w-5 h-5" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              <button className="hidden sm:block hover:bg-blue-600 p-2 rounded-full transition-colors duration-200">
                <FontAwesomeIcon icon={faQuestionCircle} className="w-5 h-5" />
              </button>
              {/* Logo hoặc Tên người dùng */}
              <div className="flex items-center">
                <button className="w-12 h-12 p-2  ">
                  <img className="rounded-full" src={User} alt="" />
                </button>
                <div>
                  <div className="text-white ">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-800 rounded-b-lg">
            {/* Mobile Logo */}
            <div className="p-4 border-b border-blue-700">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            </div>

            {/* Mobile Search */}
            <div className="p-4 border-b border-blue-700">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm"
                  className="w-full bg-blue-600 text-white placeholder-gray-300 pl-8 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-300"
                />
              </div>
            </div>

            <nav>
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="px-2 py-3 border-b border-blue-700 last:border-0"
                >
                  <button
                    className="flex items-center justify-between w-full text-left px-2 py-1 rounded-md hover:bg-blue-600"
                    onClick={() =>
                      setActiveDropdown(activeDropdown === index ? null : index)
                    }
                  >
                    <span>{item.title}</span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`w-3 h-3 transform transition-transform duration-200 ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === index && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block px-3 py-2 text-sm rounded-md hover:bg-blue-600"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainNavbar;
