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
import {
  ChevronDown,
  ArrowDownToLine,
  ArrowUpFromLine,
  ArrowUpCircle,
  RotateCcw,
} from "lucide-react";
import { chartData } from "@/config/chartData";

const spendStats = [
  {
    label: "Deposits",
    value: "$ 12.6k",
    color: "#335cff",
    bgColor: "bg-[rgba(51,92,255,0.1)]",
    icon: ArrowDownToLine,
    iconColor: "text-[#335cff]",
  },
  {
    label: "Top Ups",
    value: "$ 7.9k",
    color: "#6ee7b7",
    bgColor: "bg-[rgba(110,231,183,0.2)]",
    icon: ArrowUpCircle,
    iconColor: "text-[#10b981]",
  },
  {
    label: "Withdrawals",
    value: "$ 8.3k",
    color: "#fb923c",
    bgColor: "bg-[rgba(251,146,60,0.1)]",
    icon: ArrowUpFromLine,
    iconColor: "text-[#fb923c]",
  },
  {
    label: "Refunds",
    value: "$ 3.9k",
    color: "#fbbf24",
    bgColor: "bg-[rgba(251,191,36,0.1)]",
    icon: RotateCcw,
    iconColor: "text-[#fbbf24]",
  },
];

export function ActivityChart() {
  return (
    <div className="flex flex-col rounded-xl border border-[#ebebeb] bg-white shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]">
      {/* Stats grid + This Year button */}
      <div className="px-6 pt-6">
        <div className="flex items-start justify-between">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {spendStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full ${stat.bgColor}`}
                    >
                      <Icon className={`h-3.5 w-3.5 ${stat.iconColor}`} />
                    </span>
                    <span className="text-sm text-[#5c5c5c]">{stat.label}</span>
                  </div>
                  <span className="text-2xl font-semibold leading-8 text-[#171717]">
                    {stat.value}
                  </span>
                </div>
              );
            })}
          </div>
          <button className="flex items-center gap-1 rounded-lg border border-[#ebebeb] px-4 py-2 text-sm font-medium text-[#5c5c5c]">
            This Year
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="px-4 pb-4 pt-4">
        <div className="h-44 w-full">
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
