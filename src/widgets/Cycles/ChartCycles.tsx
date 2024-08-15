import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { physCycle, emoCycle, intelCycle } from "../../utils/constantsCycles";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  ComposedChart,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
} from "recharts";
import { CustomTooltip } from "./CustomTooltip";

type TDataChart = {
  name: string;
  phys: number;
  emo: number;
  intel: number;
}[];

export default function ChartCycles() {
  const [data, setData] = useState<TDataChart>([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (
      !localStorage.getItem("username") ||
      !localStorage.getItem("birthday")
    ) {
      navigate("/account");
    } else {
      const birthday = new Date(`${localStorage.getItem("birthday")}`);
      //   var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      //   var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      const today = new Date();
      const startMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      const numberOfDaysInMonth = startMonth.getDate();
      let allDates = [];

      const diff = startMonth.getTime() - birthday.getTime();
      const diffDays = Math.round(diff / (1000 * 3600 * 24));

      const dayPhys = diffDays % 23;
      const dayEmo = diffDays % 28;
      const dayIntel = diffDays % 33;

      for (let i = 0; i < numberOfDaysInMonth; i++) {
        allDates.push({
          name: `${i + 1}.${
            `${today.getMonth() + 1}`.length > 1
              ? `${today.getMonth() + 1}`
              : `0${today.getMonth() + 1}`
          }`,
          phys:
            dayPhys + i >= 23
              ? physCycle[(dayPhys + i) % 23]
              : physCycle[dayPhys + i],
          emo:
            dayEmo + i >= 28
              ? emoCycle[(dayEmo + i) % 28]
              : emoCycle[dayEmo + i],
          intel:
            dayIntel + i >= 33
              ? intelCycle[(dayIntel + i) % 33]
              : intelCycle[dayIntel + i],
        });
      }

      //   console.log(allDates);
      setData(allDates);
      //   console.log(diffDays);
      // console.log(Math.sin(2*Math.PI*()/23));
    }
  }, []);

  return (
    <div className="cycles__chart">
      <ResponsiveContainer>
        <LineChart width={400} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            padding={{ left: 30, right: 30 }}
            //   angle={-45}
          />
          <YAxis />
          <Legend />
          <Line
            type="monotone"
            dataKey="phys"
            stroke="#8884d8"
            name="Физический"
          />
          <Line
            type="monotone"
            dataKey="emo"
            stroke="#82ca9d"
            name="Эмоциональный"
          />
          <Line
            type="monotone"
            dataKey="intel"
            stroke="#85b4ff"
            name="Интеллектуальный"
          />
          <Tooltip
            content={<CustomTooltip active={false} payload={[]} label={""} />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
