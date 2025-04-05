import React, { useState, useEffect } from "react";
import { fetchMaterialTableData } from "../../Server/api/MaterialTableApi";
import HeaderWithDropdown from "../HeaderWithDrop/HeaderWithDrop";
import User from '../../assets/user.jpg'

const MaterialTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchMaterialTableData();
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
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                STT
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Nguyên vật liệu
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Đơn vị tính
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Số lượng
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td colSpan="4" className="px-6 py-24 text-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-16 h-16 mb-4">
                    <svg
                      className="w-full h-full text-gray-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-lg">Chưa có dữ liệu</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="w-full p-4 h-[33rem]  bg-white rounded-lg shadow">
      <HeaderWithDropdown title="Nguyên Vật Liệu Cần Mua" titleDrop="Tuần Này" />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 font-bold text-left text-xs uppercase tracking-wider"
              >
                STT
              </th>
              <th
                scope="col"
                className="px-4 py-3 font-bold text-left text-xs uppercase tracking-wider"
              >
                Nguyên vật liệu
              </th>
              <th
                scope="col"
                className="px-4 py-3 font-bold text-left text-xs uppercase tracking-wider"
              >
                Đơn vị tính
              </th>
              <th
                scope="col"
                className="px-4 py-3 font-bold text-left text-xs uppercase tracking-wider"
              >
                Số lượng
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-4 font-bold whitespace-nowrap text-sm">
                    {index + 1}
                  </td>
                  <td className="flex items-center px-4 py-4 whitespace-nowrap text-sm">
                    <div className="w-5 h-5">
                      <img src={User} alt="Logo" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold">{item.name}</span>
                      <p className="text-xs">(none)</p>
                      <span className="text-xs text-blue-700">
                        {" "}
                        {item.code}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-bold whitespace-nowrap text-sm">
                    {item.unit}
                  </td>
                  <td className="px-4 py-4 font-bold whitespace-nowrap text-sm">
                    {item.quantity}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-24 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 mb-4">
                      <svg
                        className="w-full h-full text-gray-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-lg">Chưa có dữ liệu</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaterialTable;
