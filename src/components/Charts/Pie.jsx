import React, { useState, useEffect } from "react";
import { fetchPieData } from "../../Server/api/pieApi";
import HeaderWithDropdown from "../HeaderWithDrop/HeaderWithDrop";

function Pie() {
  // Calculate percentages for the circle segments
  // const calculatePercentage = (value) =>
  //   total > 0 ? (value / total) * 100 : 0;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const data = {
  //   total: 16,
  //   inProgress: 6,
  //   completed: 5,
  //   pending: 5,
  // };

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchPieData();
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
        <div className="relative w-full h-[180px]">
          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <span className="text-basebase font-bold">{data.total}</span>
            <span className="text-gray-500 text-xs">Lệnh sản xuất</span>
          </div>

          <svg className="w-full h-full" viewBox="0 0 120 120">
            <defs>
              {/* Drop shadow filter */}
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow
                  dx="0"
                  dy="2"
                  stdDeviation="2"
                  floodOpacity="0.2"
                />
              </filter>

              {/* Inner shadow filters for each segment */}
              <filter id="innerShadowOrange">
                <feOffset dx="1" dy="1" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite operator="out" in="SourceGraphic" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1   0 0 0 0 0.624   0 0 0 0 0.263  0 0 0 0.3 0"
                />
                <feBlend mode="multiply" in2="SourceGraphic" />
              </filter>

              <filter id="innerShadowGreen">
                <feOffset dx="1" dy="1" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite operator="out" in="SourceGraphic" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.063   0 0 0 0 0.725   0 0 0 0 0.506  0 0 0 0.3 0"
                />
                <feBlend mode="multiply" in2="SourceGraphic" />
              </filter>

              <filter id="innerShadowBlue">
                <feOffset dx="1" dy="1" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite operator="out" in="SourceGraphic" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.231   0 0 0 0 0.51   0 0 0 0 0.965  0 0 0 0.3 0"
                />
                <feBlend mode="multiply" in2="SourceGraphic" />
              </filter>
            </defs>

            {/* Orange segment (Pending) */}
            <path
              d="M60,60 m-40,0 a40,40 0 0,1 40,-40"
              fill="none"
              stroke="#FFFFFF40"
              strokeWidth="15"
              strokeLinecap="round"
              transform="rotate(180 60 60)"
              filter="url(#shadow) url(#innerShadowOrange)"
              style={{
                filter: "drop-shadow(0px 5px 0px #FFFFFF40)",
              }}
            />

            {/* Green segment (Completed) */}
            <path
              d="M60,60 m-40,0 a40,40 0 0,1 40,-40"
              fill="none"
              stroke="#FFFFFF40"
              strokeWidth="15"
              strokeLinecap="round"
              transform="rotate(60 60 60)"
              filter="url(#shadow) url(#innerShadowGreen)"
              style={{
                filter: "drop-shadow(0px 5px 0px #FFFFFF40)",
              }}
            />

            {/* Blue segment (In Progress) */}
            <path
              d="M60,40 m-40,0 a40,40 0 0,1 53.3,-20"
              fill="none"
              stroke="#FFFFFF40"
              strokeWidth="15"
              strokeLinecap="round"
              transform="rotate(-80 60 60)"
              filter="url(#shadow) url(#innerShadowBlue)"
              style={{
                filter: "drop-shadow(0px 5px 0px #FFFFFF40)",
              }}
            />

            {/* Connecting lines and labels */}
            <g className="overflow-hidden">
              {/* Orange label */}
              <path
                d="M 20 60 L 0 60"
                stroke="#FF9F43"
                strokeWidth="1"
                fill="none"
              />
              <g transform="translate(-35, 52)">
                <rect
                  x="0"
                  y="0"
                  width="35"
                  height="16"
                  rx="8"
                  fill="#FF9F43"
                />
                <text
                  x="17.5"
                  y="11.5"
                  textAnchor="middle"
                  fill="white"
                  fontSize="10"
                >
                  30%
                </text>
              </g>

              {/* Green label */}
              <path
                d="M 95 30 L 110 30"
                stroke="#10B981"
                strokeWidth="1"
                fill="none"
              />
              <g transform="translate(112, 22)">
                <rect
                  x="0"
                  y="0"
                  width="35"
                  height="16"
                  rx="8"
                  fill="#10B981"
                />
                <text
                  x="17.5"
                  y="11.5"
                  textAnchor="middle"
                  fill="white"
                  fontSize="10"
                >
                  30%
                </text>
              </g>

              {/* Blue label */}
              <path
                d="M 95 90 L 110 90"
                stroke="#3B82F6"
                strokeWidth="1"
                fill="none"
              />
              <g transform="translate(112, 82)">
                <rect
                  x="0"
                  y="0"
                  width="35"
                  height="16"
                  rx="8"
                  fill="#3B82F6"
                />
                <text
                  x="17.5"
                  y="11.5"
                  textAnchor="middle"
                  fill="white"
                  fontSize="10"
                >
                  40%
                </text>
              </g>
            </g>
          </svg>
        </div>

        {/* Stats Grid */}
        <div className="relative h-[11rem] -bottom-[80px]">
          <div className="grid grid-cols-3 gap-4">
            {/* Pending */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-yellow-500">0</div>
              <div className="text-sm text-gray-600">Chưa hoàn thành</div>
            </div>

            {/* In Progress */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-blue-500">0</div>
              <div className="text-sm text-gray-600">Đang sản xuất</div>
            </div>

            {/* Completed */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-green-500">0</div>
              <div className="text-sm text-gray-600">Hoàn thành</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow">
      <HeaderWithDropdown title="Tình Hình Sản Xuất" titleDrop="Hôm Nay" />
      {/* Circular Progress */}
      {/* Donut Chart */}
      <div>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index}>
              <div className="relative w-full h-[250px]">
                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                  <span className="text-basebase font-bold">{item.total}</span>
                  <span className="text-gray-500 text-xs">Lệnh sản xuất</span>
                </div>

                <svg className="w-full h-full" viewBox="0 0 120 120">
                  <defs>
                    {/* Drop shadow filter */}
                    <filter
                      id="shadow"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="2"
                        stdDeviation="2"
                        floodOpacity="0.2"
                      />
                    </filter>

                    {/* Inner shadow filters for each segment */}
                    <filter id="innerShadowOrange">
                      <feOffset dx="1" dy="1" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite operator="out" in="SourceGraphic" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1   0 0 0 0 0.624   0 0 0 0 0.263  0 0 0 0.3 0"
                      />
                      <feBlend mode="multiply" in2="SourceGraphic" />
                    </filter>

                    <filter id="innerShadowGreen">
                      <feOffset dx="1" dy="1" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite operator="out" in="SourceGraphic" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.063   0 0 0 0 0.725   0 0 0 0 0.506  0 0 0 0.3 0"
                      />
                      <feBlend mode="multiply" in2="SourceGraphic" />
                    </filter>

                    <filter id="innerShadowBlue">
                      <feOffset dx="1" dy="1" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite operator="out" in="SourceGraphic" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.231   0 0 0 0 0.51   0 0 0 0 0.965  0 0 0 0.3 0"
                      />
                      <feBlend mode="multiply" in2="SourceGraphic" />
                    </filter>
                  </defs>

                  {/* Orange segment (Pending) */}
                  <path
                    d="M60,60 m-40,0 a40,40 0 0,1 40,-40"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="15"
                    strokeLinecap="round"
                    transform="rotate(180 60 60)"
                    filter="url(#shadow) url(#innerShadowOrange)"
                    style={{
                      filter:
                        "drop-shadow(0px 5px 0px rgba(59, 130, 246, 0.3))",
                    }}
                  />

                  {/* Green segment (Completed) */}
                  <path
                    d="M60,60 m-40,0 a40,40 0 0,1 40,-40"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="15"
                    strokeLinecap="round"
                    transform="rotate(60 60 60)"
                    filter="url(#shadow) url(#innerShadowGreen)"
                    style={{
                      filter:
                        "drop-shadow(0px 5px 0px rgba(16, 185, 129, 0.3))",
                    }}
                  />

                  {/* Blue segment (In Progress) */}
                  <path
                    d="M60,40 m-40,0 a40,40 0 0,1 53.3,-20"
                    fill="none"
                    stroke="#FF9F43"
                    strokeWidth="15"
                    strokeLinecap="round"
                    transform="rotate(-80 60 60)"
                    filter="url(#shadow) url(#innerShadowBlue)"
                    style={{
                      filter:
                        "drop-shadow(0px 5px 0px rgba(255, 159, 67, 0.3))",
                    }}
                  />

                  {/* Connecting lines and labels */}
                  <g>
                    {/* Orange label */}
                    <path
                      d="M 20 60 L 0 60"
                      stroke="#FF9F43"
                      strokeWidth="1"
                      fill="none"
                    />
                    <g transform="translate(-35, 52)">
                      <rect
                        x="0"
                        y="0"
                        width="35"
                        height="16"
                        rx="8"
                        fill="#FF9F43"
                      />
                      <text
                        x="17.5"
                        y="11.5"
                        textAnchor="middle"
                        fill="white"
                        fontSize="10"
                      >
                        30%
                      </text>
                    </g>

                    {/* Green label */}
                    <path
                      d="M 95 30 L 110 30"
                      stroke="#10B981"
                      strokeWidth="1"
                      fill="none"
                    />
                    <g transform="translate(112, 22)">
                      <rect
                        x="0"
                        y="0"
                        width="35"
                        height="16"
                        rx="8"
                        fill="#10B981"
                      />
                      <text
                        x="17.5"
                        y="11.5"
                        textAnchor="middle"
                        fill="white"
                        fontSize="10"
                      >
                        30%
                      </text>
                    </g>

                    {/* Blue label */}
                    <path
                      d="M 95 90 L 110 90"
                      stroke="#3B82F6"
                      strokeWidth="1"
                      fill="none"
                    />
                    <g transform="translate(112, 82)">
                      <rect
                        x="0"
                        y="0"
                        width="35"
                        height="16"
                        rx="8"
                        fill="#3B82F6"
                      />
                      <text
                        x="17.5"
                        y="11.5"
                        textAnchor="middle"
                        fill="white"
                        fontSize="10"
                      >
                        40%
                      </text>
                    </g>
                  </g>
                </svg>
              </div>
              {/* Stats Grid */}
              <div className="relative h-[11rem] -bottom-[80px]">
                <div className="grid grid-cols-3 gap-4">
                  {/* Pending */}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-yellow-500">
                      {item.pending}
                    </div>
                    <div className="text-sm text-gray-600">Chưa hoàn thành</div>
                  </div>

                  {/* In Progress */}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-blue-500">
                      {item.inProgress}
                    </div>
                    <div className="text-sm text-gray-600">Đang sản xuất</div>
                  </div>

                  {/* Completed */}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-green-500">
                      {item.completed}
                    </div>
                    <div className="text-sm text-gray-600">Hoàn thành</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full p-4">
            <div className="relative w-full h-[180px]">
              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                <span className="text-basebase font-bold">0</span>
                <span className="text-gray-500 text-xs">Lệnh sản xuất</span>
              </div>

              <svg className="w-full h-full" viewBox="0 0 120 120">
                <defs>
                  {/* Drop shadow filter */}
                  <filter
                    id="shadow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="2"
                      stdDeviation="2"
                      floodOpacity="0.2"
                    />
                  </filter>

                  {/* Inner shadow filters for each segment */}
                  <filter id="innerShadowOrange">
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite operator="out" in="SourceGraphic" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1   0 0 0 0 0.624   0 0 0 0 0.263  0 0 0 0.3 0"
                    />
                    <feBlend mode="multiply" in2="SourceGraphic" />
                  </filter>

                  <filter id="innerShadowGreen">
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite operator="out" in="SourceGraphic" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.063   0 0 0 0 0.725   0 0 0 0 0.506  0 0 0 0.3 0"
                    />
                    <feBlend mode="multiply" in2="SourceGraphic" />
                  </filter>

                  <filter id="innerShadowBlue">
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite operator="out" in="SourceGraphic" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.231   0 0 0 0 0.51   0 0 0 0 0.965  0 0 0 0.3 0"
                    />
                    <feBlend mode="multiply" in2="SourceGraphic" />
                  </filter>
                </defs>

                {/* Orange segment (Pending) */}
                <path
                  d="M60,60 m-40,0 a40,40 0 0,1 40,-40"
                  fill="none"
                  stroke="#ccc"
                  strokeWidth="15"
                  strokeLinecap="round"
                  transform="rotate(180 60 60)"
                  filter="url(#shadow) url(#innerShadowOrange)"
                  style={{
                    filter: "drop-shadow(0px 5px 0px #cccccccc)",
                  }}
                />

                {/* Green segment (Completed) */}
                <path
                  d="M60,60 m-40,0 a40,40 0 0,1 40,-40"
                  fill="none"
                  stroke="#ccc"
                  strokeWidth="15"
                  strokeLinecap="round"
                  transform="rotate(60 60 60)"
                  filter="url(#shadow) url(#innerShadowGreen)"
                  style={{
                    filter: "drop-shadow(0px 5px 0px #cccccccc)",
                  }}
                />

                {/* Blue segment (In Progress) */}
                <path
                  d="M60,40 m-40,0 a40,40 0 0,1 53.3,-20"
                  fill="none"
                  stroke="#ccc"
                  strokeWidth="15"
                  strokeLinecap="round"
                  transform="rotate(-80 60 60)"
                  filter="url(#shadow) url(#innerShadowBlue)"
                  style={{
                    filter: "drop-shadow(0px 5px 0px #cccccccc)",
                  }}
                />

                {/* Connecting lines and labels */}
                <div className="overflow-hidden">
                  <g>
                    {/* Orange label */}
                    <path
                      d="M 20 60 L 0 60"
                      stroke="#FF9F43"
                      strokeWidth="1"
                      fill="none"
                    />
                    <g transform="translate(-35, 52)">
                      <rect
                        x="0"
                        y="0"
                        width="35"
                        height="16"
                        rx="8"
                        fill="#FF9F43"
                      />
                      <text
                        x="17.5"
                        y="11.5"
                        textAnchor="middle"
                        fill="white"
                        fontSize="10"
                      >
                        30%
                      </text>
                    </g>

                    {/* Green label */}
                    <path
                      d="M 95 30 L 110 30"
                      stroke="#10B981"
                      strokeWidth="1"
                      fill="none"
                    />
                    <g transform="translate(112, 22)">
                      <rect
                        x="0"
                        y="0"
                        width="35"
                        height="16"
                        rx="8"
                        fill="#10B981"
                      />
                      <text
                        x="17.5"
                        y="11.5"
                        textAnchor="middle"
                        fill="white"
                        fontSize="10"
                      >
                        30%
                      </text>
                    </g>

                    {/* Blue label */}

                    <path
                      d="M 95 90 L 110 90"
                      stroke="#3B82F6"
                      strokeWidth="1"
                      fill="none"
                    />
                    <g transform="translate(112, 82)">
                      <rect
                        x="0"
                        y="0"
                        width="35"
                        height="16"
                        rx="8"
                        fill="#3B82F6"
                      />
                      <text
                        x="17.5"
                        y="11.5"
                        textAnchor="middle"
                        fill="white"
                        fontSize="10"
                      >
                        40%
                      </text>
                    </g>
                  </g>
                </div>
              </svg>
            </div>
            {/* Stats Grid */}
            <div className="relative h-[11rem] -bottom-[80px]">
              <div className="grid grid-cols-3 gap-4">
                {/* Pending */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-yellow-500">0</div>
                  <div className="text-sm text-gray-600">Chưa hoàn thành</div>
                </div>

                {/* In Progress */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-blue-500">0</div>
                  <div className="text-sm text-gray-600">Đang sản xuất</div>
                </div>

                {/* Completed */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-green-500">0</div>
                  <div className="text-sm text-gray-600">Hoàn thành</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pie;
