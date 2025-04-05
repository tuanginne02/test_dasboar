import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons";

function Card({ number, title, rate }) {
  return (
    <div className="flex justify-between bg-white p-4 rounded-lg shadow-md">
      <div>
        <div className="text-2xl font-bold text-blue-600">{number}</div>
        <div className="text-gray-600 text-sm mt-1">{title}</div>
      </div>
      <div>
        {rate > 5.0 ? (
          <div className="flex items-center mt-2 text-[#1F9285]">
            <FontAwesomeIcon icon={faAnglesUp} />
            <span className="text-sm ml-2">{rate} %</span>
          </div>
        ) : (
          <div className="flex items-center mt-2 text-[#FF5630]">
            <FontAwesomeIcon icon={faAnglesDown} />
            <span className="text-sm ml-2">{rate} %</span>
          </div>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  rate: PropTypes.oneOfType([PropTypes.string, PropTypes.rate]).isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
