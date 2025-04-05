import React, { useState, useEffect } from "react";
import Card from "./Card";
import HeaderWithDropdown from "../HeaderWithDrop/HeaderWithDrop";
import { fetchCardData } from "../../Server/api/cardApi";

function CardList() {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    const loadCardData = async () => {
      try {
        const data = await fetchCardData();
        setCardData(data);
        setHasData(data.length > 0);
      } catch (error) {
        console.error("Error fetching card data:", error);
        setHasData(false);
      } finally {
        setLoading(false);
      }
    };

    loadCardData();
  }, []);

  if (loading) {
    return (
      <div className="m-2">
        <HeaderWithDropdown
          title="Top Sản Phẩm Sản Xuất Nhiều Nhất"
          titleDrop="Tháng Này"
        />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md animate-pulse"
            >
              <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!hasData) {
    return (
      <div className="m-2">
        <HeaderWithDropdown
          title="Top Sản Phẩm Sản Xuất Nhiều Nhất"
          titleDrop="Tháng Này"
        />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md text-center"
            >
              <div className="text-2xl font-bold  text-left text-blue-500">
                0
              </div>
              <div className="text-gray-500 font-bold text-left text-sm mt-1">
                Chưa có mặt hàng
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="m-2">
      <HeaderWithDropdown
        title="Top Sản Phẩm Sản Xuất Nhiều Nhất"
        titleDrop="Tháng Này"
      />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            number={card.number}
            title={card.title}
            rate={card.rate}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;
