import React, { useState, useEffect } from "react";
import { fetchColumnData } from "../../Server/api/columnApi";
import HeaderWithDropdown from "../HeaderWithDrop/HeaderWithDrop";

const Column = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);

  const months = [
    "Áo ba lỗ",
    "Áo sơ mi",
    "Áo thun polo",
    "Quần baggy",
    "Quần jogger",
  ];
  const maxValue = 100;
  const maxHeight = 250;

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchColumnData();
        setData(response);
      } catch (error) {
        console.error("Error fetching column data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="w-full p-4">
        <div className="flex justify-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
            <span className="text-sm text-gray-600">Kế hoạch</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
            <span className="text-sm text-gray-600">Thực hiện</span>
          </div>
        </div>
        <div className="relative h-[300px] mt-4">
          <div className="animate-pulse bg-gray-200 h-full rounded"></div>
        </div>
      </div>
    );
  }

  const renderRow = (item) => {
    const planHeight = (item.plan / maxValue) * maxHeight;
    const actualHeight = (item.actual / maxValue) * maxHeight;

    return (
      <div
        className="flex flex-col items-center relative"
        onMouseEnter={() => setHoveredId(item.id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        <div className="flex items-end gap-2 h-[250px]">
          <div
            className="w-3 bg-blue-500 rounded relative"
            style={{ height: `${planHeight}px` }}
          >
            {hoveredId === item.id && (
              <div className="absolute -left-4 bottom-full md:bottom-44 -mb-5 px-2 py-1 text-xs text-white bg-black rounded whitespace-nowrap z-10">
                {item.plan.toLocaleString()} cái
              </div>
             )} 
          </div>
          <div
            className="w-3 bg-green-500 rounded relative"
            style={{ height: `${actualHeight}px` }}
          >
            {hoveredId === item.id && (
              <div className="absolute -left-4 bottom-full  -mb-5 px-2 py-1 text-xs text-white bg-black rounded whitespace-nowrap z-10">
                {item.actual.toLocaleString()} cái
              </div>
             )} 
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full p-4 rounded-lg shadow bg-white">
      <HeaderWithDropdown title="Kế Hoạch Sản Xuất" titleDrop="Quý Này" />

      {/* Legend */}
      <div className="flex justify-end gap-4 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-2 md:w-8 md:h4 bg-blue-500 rounded-xl"></div>
          <span className="md:text-sm text-xs text-gray-600">Kế hoạch</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-2 md:w-8 md:h4 bg-green-500 rounded-xl"></div>
          <span className="md:text-sm text-xs text-gray-600">Thực hiện</span>
        </div>
      </div>

      {/* Chart */}
      <div className="relative mt-6 overflow-x-auto">
        {/* Y-axis label */}
        <div className="absolute left-0 -top-8 text-gray-600 text-sm font-semibold">
          Cái
        </div>

        <div className="flex">
          {/* Y-axis ticks */}
          <div className="flex flex-col justify-between text-gray-500 text-sm pr-2 h-[250px]">
            {[...Array(6)].map((_, index) => (
              <div key={index}>{Math.round((maxValue * (5 - index)) / 5)}</div>
            ))}
          </div>

          {/* Bars */}
          <div className="flex-1 overflow-x-auto pl-4 md:pl-12">
            {!data || data.length === 0 ? (
              <div className="flex justify-center items-center h-[250px]">
                <span className="text-gray-400 text-sm">Không có dữ liệu</span>
              </div>
            ) : (
              <div className="flex gap-6 md:gap-24">
                {data.map((item) => (
                  <div key={item.id}>{renderRow(item)}</div>
                ))}
              </div>
            )}

            {/* X-axis labels */}
            <div className="flex md:gap-[5.5rem] gap-4 mt-4 text-xs md:text-sm text-gray-600">
              {months.map((label, i) => (
                <div key={i} className="w-[40px] text-center">
                  {label}
                </div>
              ))}
            </div>

            {/* X-axis title */}
            <div className="absolute md:text-sm text-xs font-semibold text-gray-600 md:-mt-10 md:-ml-20 -mt-9 -ml-12">
              Mặt Hàng
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Column;
