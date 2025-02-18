"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { category: 'Front-end Development', level: 0.1 },
    { category: 'UX Research', level: 0.3 },
    { category: 'UI Design', level: 0.65 },
    { category: 'UX Design', level: .8 },
    { category: 'Product Strategy', level: 0.65 },
    { category: 'Brand Design', level: 0.35 },
    { category: 'Product Management', level: 0.2 },
    { category: '', level: 0.1 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsla(var(--chart-1))",
  },
} satisfies ChartConfig


export function Chart() {
  return (
    <div className="w-full h-[330px] rounded-lg relative flex flex-col">
      {/* Y-axis labels (Positioned left inside container) */}
      <div className="absolute left-0 top-[35%] text-gray-600 text-sm rotate-0">
        Done enough <br /> to work
      </div>
      <div className="absolute left-0 bottom-[15%] text-gray-600 text-sm rotate-0">
        Know enough <br /> to hang
      </div>

      <ResponsiveContainer className={'self-end'} width="90%" height="100%">
        <AreaChart data={chartData} margin={{ top: 40, right: 20, left: 20, bottom: 40 }}>
          {/* X-axis Labels Positioned on Top */}
          <XAxis
            dataKey="category"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 16, fill: "#5A5A5A",width:10, textAnchor:'right'}}
            interval={0}
            height={50}
            orientation="top"
          />

          {/* Hidden Y-axis to avoid overflow issues */}
          <YAxis hide  domain={[0, 1]} />
          <ReferenceLine  y={0.75} stroke="#C4C4C4" strokeWidth={1} />
          <ReferenceLine y={0.1} stroke="#C4C4C4" strokeWidth={1}  />
          <Tooltip />

          {/* Bell Curve Area with Gradient */}
          <Area
            type="monotone"
            dataKey="level"
            stroke="#E9A545"
            fill="url(#colorGradient)"
            strokeWidth={2}
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
  )
}
