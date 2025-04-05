import React, { useState, useEffect } from "react";
import { fetchRowData } from "../../Server/api/rowApi";
import HeaderWithDropdown from "../HeaderWithDrop/HeaderWithDrop";

const Rows = () => {
  const [data, setData] = useState([]);

  // const maxValue = Math.max(...data.map((item) => item.value));
  const steps = 5;

  const maxValue = 3200;

  const [hoveredId, setHoveredId] = useState(null);
  // const stepValue = maxValue / steps;

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchRowData();
        setData(response);
      } catch (error) {
        console.error("Error fetching Row data:", error);
      }
    };

    loadData();
  }, []);

  const renderRow = (item) => {
    const widthPercentage = (item.value / maxValue) * 100;

    return (
      <div
        className="flex items-center w-full mb-4"
        onMouseEnter={() => setHoveredId(item.id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        <div className="w-36 text-gray-600 text-sm text-right mr-4">
          {item.label}
        </div>

        <div className="flex-1 relative">
          <div
            className="h-2  bg-blue-500 rounded"
            style={{ width: `${widthPercentage}%` }}
          ></div>
          

          {hoveredId === item.id && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded text-sm">
              {item.value.toLocaleString()}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full rounded-lg shadow p-[18px]">
      <HeaderWithDropdown
        title="Top 5 Khách Hàng Có Sản Lượng Nhiều Nhất"
        titleDrop="Năm Nay"
      />
      <div className="mb-2 text-gray-700 text-lg font-medium">Khách hàng</div>
      {/* Grid lines and values */}
      <div className="relative">
        <div className="absolute w-full h-full">
          {/* <div className="flex justify-between text-sm text-gray-500 mb-6">
            {[...Array(steps + 1)].map((_, index) => (
              <div key={index}>{(stepValue * index).toLocaleString()}</div>
            ))}
          </div> */}
          {[...Array(steps)].map((_, index) => (
            <div
              key={index}
              className="absolute border-r border-gray-200 h-full"
              style={{
                left: `${(index + 1) * (100 / steps)}%`,
                top: "24px",
              }}
            />
          ))}
        </div>

        {/* Bars */}
        <div className="relative pt-6 space-y-4 h-[18rem]">
          {!data || data.length === 0 ? (
            // data.map((item, index) => (
              <div className="flex items-center">
                {/* <div className="w-32 text-sm text-gray-600"></div> */}
                <div className="flex-1 h-8 relative">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center bg-white bg-opacity-90 px-4 py-2 rounded">
                      <p className="text-sm text-gray-500">Không có dữ liệu</p>
                    </div>
                  </div>
                </div>
              </div>
            // ))
          ) : (
            <div className="space-y-4">
              {data.map((item) => (
                <React.Fragment key={item.id}>{renderRow(item)}</React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* X-axis label */}
      <div className="flex items-baseline mt-4">
        <div className="mt-2 text-sm text-gray-600">Sản lượng</div>
        <div className="flex-1">
          <div className="flex justify-between ml-[72px] text-gray-600 text-sm">
            <span>0</span>
            <span>800</span>
            <span>1,600</span>
            <span>2,400</span>
            <span>3,200</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rows;
