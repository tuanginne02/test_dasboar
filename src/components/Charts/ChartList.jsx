import React, { useState, useEffect } from "react";
import { fetchChartListData } from "../../Server/api/chartListApi";
import HeaderWithDropdown from "../HeaderWithDrop/HeaderWithDrop";

const ChartList = () => {
  // Create an array of 7 items to match the image
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const emptyItems = Array(7).fill(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchChartListData();
        setData(response);
      } catch (error) {
        console.error("Error fetching ChartList data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-4 p-2 rounded-lg shadow">
        <HeaderWithDropdown
          title="Tiến Độ Sản Xuất Theo Nhóm"
          titleDrop="Hoàn Thành"
        />

        {emptyItems.map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 bg-white rounded-lg"
          >
            <div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div className="min-w-[150px]">
                    <span className="text-gray-800">Chưa có mặt hàng</span>
                  </div>
                  <div className="min-w-[80px] text-right">
                    <span className="text-gray-600 font-bold mr-2">-</span>
                    <span className="text-gray-600">
                      <span className="ai-arrow-right">-</span>
                    </span>
                  </div>
                </div>
                <div className="relative h-2 bg-gray-200 rounded-full w-96">
                  <div className="absolute h-full bg-[#10B981] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4 p-4 rounded-lg shadow">
      <HeaderWithDropdown
        title="Tiến Độ Sản Xuất Theo Nhóm"
        titleDrop="Hoàn Thành"
      />
      {/* Product rows */}
      {data.map((item, index) => (
        <div
          key={index}
          className="gap-4 h-[2.8rem]"
        >
          {!data || data.length === 0 ? (
            <div className="flex flex-col gap-4 p-4"></div>
          ) : (
            <div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div className="min-w-[150px]">
                    <span className="text-gray-800">{item.name}</span>
                  </div>
                  <div className="min-w-[80px] text-right">
                    <span className="text-gray-600 font-bold mr-2">
                      {item.quantity} cái
                    </span>
                    <span className="text-gray-600">{item.percentage}(%)</span>
                  </div>
                </div>
                <div className="relative h-2 bg-gray-200 rounded-full">
                  <div
                    className="absolute h-full bg-[#10B981] rounded-full w-96"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChartList;
