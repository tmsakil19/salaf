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
import { chartData } from "@/config/chartData";
import { ArrowDown01Icon, Money01Icon, MoneyReceiveFlow01Icon, ReverseWithdrawal01Icon, SaveMoneyDollarIcon } from "@hugeicons/core-free-icons";
import { Icon } from "../ui/icon";
import { Button } from "../ui/button";

const spendStats = [
  {
    label: "Deposits",
    value: "$ 12.6k",
    bgColor: "bg-chart-green-light",
    icon: Money01Icon,
    iconColor: "text-chart-green",
  },
  {
    label: "Top Ups",
    value: "$ 7.9k",
    bgColor: "bg-primary-lighter",
    icon: MoneyReceiveFlow01Icon,
    iconColor: "text-primary-base",
  },
  {
    label: "Withdrawals",
    value: "$ 8.3k",
    bgColor: "bg-chart-pink-light",
    icon: ReverseWithdrawal01Icon,
    iconColor: "text-chart-pink",
  },
  {
    label: "Refunds",
    value: "$ 3.9k",
    bgColor: "bg-chart-red-light",
    icon: SaveMoneyDollarIcon,
    iconColor: "text-state-error",
  },
];

export function ActivityChart() {
  return (
    <div className="flex flex-col gap-[15px] rounded-xl border border-stroke-soft bg-bg-white py-6 shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]">
      {/* Stats grid + This Year button */}
      <div className="px-6">
        <div className="flex items-start justify-between">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {spendStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <span
                    className={`flex size-6 items-center justify-center rounded-full ${stat.bgColor}`}
                  >
                    <Icon icon={stat.icon} className={`size-3.5 ${stat.iconColor}`} />
                  </span>
                  <span className="text-base leading-6 tracking-[-0.176px] text-text-sub">
                    {stat.label}
                  </span>
                </div>
                <span className="text-2xl font-medium leading-8 tracking-[-0.36px] text-text-strong">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            className="h-auto gap-2 rounded-xl border-stroke-soft px-4 py-2 text-sm font-medium leading-5 tracking-[-0.084px] text-text-sub hover:bg-bg-weak hover:text-text-sub hidden sm:flex"
          >
            This Year
            <Icon icon={ArrowDown01Icon} className="size-5" />
          </Button>
        </div>
      </div>

      {/* Chart */}
      <div className="px-4">
        <div className="h-44 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
              barCategoryGap="20%"
              barGap={2}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={true}
                horizontal={false}
                stroke="var(--stroke-soft)"
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "var(--chart-axis)" }}
              />
              {/* <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "var(--chart-axis)" }}
                tickFormatter={(value: number) =>
                  `$${(value / 1000).toFixed(0)}k`
                }
                hide={true}
              /> */}
              <Tooltip
                formatter={(value) => [
                  `$${Number(value).toLocaleString()}`,
                  "",
                ]}
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid var(--stroke-soft)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                  fontSize: "12px",
                }}
              />
              <Bar
                dataKey="deposits"
                name="Deposits"
                fill="var(--chart-green)"
                radius={[8, 8, 0, 0]}
                barSize={6}
              />
              <Bar
                dataKey="topUps"
                name="Top Ups"
                fill="var(--primary-base)"
                radius={[8, 8, 0, 0]}
                barSize={6}
              />
              <Bar
                dataKey="withdrawals"
                name="Withdrawals"
                fill="var(--chart-pink)"
                radius={[8, 8, 0, 0]}
                barSize={6}
              />
              <Bar
                dataKey="refunds"
                name="Refunds"
                fill="var(--state-error)"
                radius={[8, 8, 0, 0]}
                barSize={6}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
