import React, { useState, useEffect } from "react";
import { fetchColumnData } from "../../Server/api/columnApi";
import HeaderWithDropdown from "../HeaderWithDrop/HeaderWithDrop";

const Column = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);

  // Fixed data for axes
  const months = [
    "Áo ba lỗ",
    "Áo sơ mi",
    "Áo thun polo",
    "Quần baggy",
    "Quần jogger",
  ];
  const maxValue = 100; // Fixed max value for Y axis
  const maxHeight = 250; // Maximum height in pixels

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
      <div className="w-full p-[18px]">
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
    // const widthPercentage = (data[index]?.plan / maxValue) * maxHeight;
    const widthPercentage1 = (item.plan / maxValue) * maxHeight;
    const widthPercentage2 = (item.actual / maxValue) * maxHeight;
    return (
      <div
        className="flex items-baseline w-full mb-4"
        onMouseEnter={() => setHoveredId(item.id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        {/* <div className="w-48 text-gray-600 text-sm text-right mr-4">
          {item.label}
        </div> */}

        <div className="flex items-baseline relative ">
          <div
            className="w-2 group  mr-2 bg-blue-500 rounded"
            style={{
              height: `${widthPercentage1}px`,
            }}
            // style={{ width: `${widthPercentage}%` }}
          >
            {hoveredId === item.id && item.plan && (
              <div className="absolute right-0 -top-6 -translate-y-1/2 bg-black text-white px-1 py-1 w-16 rounded text-sm ">
                {item.plan.toLocaleString()} cái
              </div>
            )}
          </div>
          <div
            className="w-2 group bg-red-500 rounded"
            style={{
              height: `${widthPercentage2}px`,
            }}
          >
            {hoveredId === item.id && item.actual && (
              <div className="absolute right-0 -top-6 -translate-y-1/2 bg-black text-white px-1 py-1 w-16 rounded text-sm ">
                {item.actual.toLocaleString()} cái
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full p-[18px] mr-8 rounded-lg shadow">
      <HeaderWithDropdown title="Kế Hoạch Sản Xuất" titleDrop="Quý Này" />
      {/* Legend */}
      <div className="flex justify-end  gap-4 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-4 bg-blue-500 rounded-xl"></div>
          <span className="text-sm text-gray-600">Kế hoạch</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-4 bg-green-500 rounded-xl"></div>
          <span className="text-sm text-gray-600 ">Thực hiện</span>
        </div>
      </div>
      <div className="relative h-[23rem]">
        {/* Y-axis labels */} {/* Origin label "Tháng" */}
        <div
          className="absolute text-gray-600 text-sm font-bold"
          style={{
            left: "0",
            top: "-33px",
          }}
        >
          Cái
        </div>
        <div className="absolute left-0 h-full flex flex-col justify-between text-gray-600 text-sm pb-16">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="relative flex items-center h-6">
              {Math.round((maxValue * (5 - index)) / 5)}
            </div>
          ))}
        </div>
        {/* Chart content */}
        <div className="ml-12 h-full flex items-end pb-8">
          {/* No data message */}
          <div className="flex-1 flex flex-col items-center justify-end gap-2">
            {!data || data.length === 0 ? (
              // No data state - show empty bars container
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center bg-white bg-opacity-90 px-4 py-2 rounded">
                  <p className="text-sm text-gray-500">Không có dữ liệu</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4 flex items-baseline  w-[45rem]">
                {data.map((item) => (
                  <React.Fragment key={item.id}>
                    {renderRow(item)}
                  </React.Fragment>
                ))}
              </div>
            )}

            {/* X-axis label */}
            <div className="flex justify-between w-[45rem]">
              {months.map((month, index) => (
                <div key={index} className="text-sm text-gray-600 mt-2">
                  {month}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Origin label "Tháng" */}
        <div
          className="absolute text-gray-600 text-sm font-bold"
          style={{
            left: "0",
            bottom: "33px",
          }}
        >
          Mặt Hàng
        </div>
      </div>
    </div>
  );
};

export default Column;
