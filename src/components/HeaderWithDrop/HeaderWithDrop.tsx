import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const HeaderWithDropdown = ({ title, titleDrop }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="flex justify-between items-center m-4">
            {/* Title */}
            <div className="text-base font-bold text-gray-800">
                <span>{title}</span>
            </div>

            {/* Dropdown */}
            <div>
                <div className="relative inline-block text-left">
                    <div>
                        <button
                            onClick={toggleDropdown}
                            className="flex justify-between items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700"
                        >
                            <FontAwesomeIcon icon={faCalendar} className="text-gray-500" />
                            <span className="mx-2">{titleDrop}</span>
                            <FontAwesomeIcon icon={faChevronDown} className="text-gray-500" />
                        </button>
                    </div>

                    {isOpen && (
                        <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="none">
                                <a
                                    href="#"
                                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                    Hôm nay
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                    Tuần này
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                    Tháng này
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                    Năm nay
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeaderWithDropdown;
