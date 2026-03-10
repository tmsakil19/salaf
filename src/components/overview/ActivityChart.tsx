"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";
import { chartData } from "@/config/chartData";

const spendStats = [
  { label: "Deposits", value: "$12.6k", color: "#335cff" },
  { label: "Top Ups", value: "$7.9k", color: "#6ee7b7" },
  { label: "Withdrawals", value: "$8.3k", color: "#fb923c" },
  { label: "Refunds", value: "$3.9k", color: "#fbbf24" },
];

export function ActivityChart() {
  return (
    <div className="flex flex-col rounded-xl border border-[#ebebeb] bg-white shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#ebebeb] px-5 py-4">
        <h3 className="text-base font-medium text-[#171717]">Spend</h3>
        <button className="flex items-center gap-1 rounded-lg border border-[#ebebeb] px-3 py-1.5 text-xs font-medium text-[#5c5c5c]">
          This Year
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 border-b border-[#ebebeb]">
        {spendStats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-2 px-5 py-3">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: stat.color }}
            />
            <div className="flex flex-col">
              <span className="text-xs text-[#a3a3a3]">{stat.label}</span>
              <span className="text-lg font-semibold leading-6 text-[#171717]">
                {stat.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="px-5 py-4">
        <div className="h-55 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 5, right: 0, left: -20, bottom: 0 }}
              barCategoryGap="20%"
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#ebebeb"
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#a3a3a3" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#a3a3a3" }}
                tickFormatter={(value: number) =>
                  `$${(value / 1000).toFixed(0)}k`
                }
              />
              <Tooltip
                formatter={(value) => [
                  `$${Number(value).toLocaleString()}`,
                  "",
                ]}
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid #ebebeb",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                  fontSize: "12px",
                }}
              />
              <Bar
                dataKey="deposits"
                name="Deposits"
                fill="#335cff"
                radius={[3, 3, 0, 0]}
                barSize={8}
              />
              <Bar
                dataKey="topUps"
                name="Top Ups"
                fill="#6ee7b7"
                radius={[3, 3, 0, 0]}
                barSize={8}
              />
              <Bar
                dataKey="withdrawals"
                name="Withdrawals"
                fill="#fb923c"
                radius={[3, 3, 0, 0]}
                barSize={8}
              />
              <Bar
                dataKey="refunds"
                name="Refunds"
                fill="#fbbf24"
                radius={[3, 3, 0, 0]}
                barSize={8}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
