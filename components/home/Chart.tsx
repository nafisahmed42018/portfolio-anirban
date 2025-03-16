"use client";

import {
  Area,
  AreaChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";



const chartData = [
  { category: "Front-end Development", level: 0.1 },
  { category: "UX Research", level: 0.3 },
  { category: "UI Design", level: 0.65 },
  { category: "UX Design", level: 0.8 },
  { category: "Product Strategy", level: 0.65 },
  { category: "Brand Design", level: 0.35 },
  { category: "Product Management", level: 0.2 },
  { category: "", level: 0.1 },
];



export function Chart() {
  return (
    <div className="w-full h-[330px] rounded-lg relative flex flex-col">
      {/* Y-axis labels (Positioned left inside container) */}
      <div className="absolute left-0 top-[35%] text-monochrome110 font-plusJakartaSans text-lg rotate-0">
        Done enough <br /> to work
      </div>
      <div className="absolute left-0 bottom-[12%] text-monochrome110 font-plusJakartaSans text-lg rotate-0">
        Know enough <br /> to hang
      </div>

      <ResponsiveContainer className={"self-end"} width="90%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 40, right: 20, left: 44, bottom: 40 }}
        >
          {/* X-axis Labels Positioned on Top */}
          <XAxis
            dataKey="category"
            axisLine={false}
            tickLine={false}
            padding={{ left: 20, right: 20 }}
            tick={{
              fontSize: 16,
              width: 10,
              fill: "#383838",
              textAnchor: "right",
              fontFamily: "Plus Jakarta Sans",
            }}
            // tickFormatter={(value) => 
            //   value === "UI Design" || value === "UX Design" ? "#E9A545" : "#383838"
            // }
            interval={0}
            height={50}
            orientation="top"
          />

          {/* Hidden Y-axis to avoid overflow issues */}
          <YAxis hide domain={[0, 1]} />
          <ReferenceLine y={0.70} stroke="#C4C4C4" strokeWidth={1} />
          <ReferenceLine y={0.1} stroke="#C4C4C4" strokeWidth={1} />

          {/* Bell Curve Area with Gradient */}
          <Area
            type="monotone"
            dataKey="level"
            stroke="#E9A545"
            fill="url(#colorGradient)"
            strokeWidth={3}
            strokeLinecap="round"
          />

          {/* Gradient for smooth area transition */}
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E9A545" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#E9A545" stopOpacity={0} />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
