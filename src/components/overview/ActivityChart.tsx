"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { chartData } from "@/config/chartData";

export function ActivityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold">
          Monthly Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value: number) =>
                  `$${(value / 1000).toFixed(0)}k`
                }
              />
              <Tooltip
                formatter={(value) => [`$${Number(value).toLocaleString()}`, ""]}
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid hsl(var(--border))",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                }}
              />
              <Legend
                verticalAlign="top"
                align="right"
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ paddingBottom: "20px" }}
              />
              <Bar
                dataKey="deposits"
                name="Deposits"
                fill="#10b981"
                radius={[4, 4, 0, 0]}
                barSize={12}
              />
              <Bar
                dataKey="withdrawals"
                name="Withdrawals"
                fill="#ef4444"
                radius={[4, 4, 0, 0]}
                barSize={12}
              />
              <Bar
                dataKey="topUps"
                name="Top Ups"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
                barSize={12}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
